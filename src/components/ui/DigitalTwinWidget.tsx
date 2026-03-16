"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StreamingAvatar, {
  AvatarQuality,
  StreamingEvents,
  TaskType,
} from "@heygen/streaming-avatar";

const BRAIN_URL = process.env.NEXT_PUBLIC_BRAIN_URL!;
const AVATAR_ID = process.env.NEXT_PUBLIC_HEYGEN_AVATAR_ID!;

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

type AvatarStatus = "idle" | "connecting" | "ready" | "error";

export default function DigitalTwinWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [avatarStatus, setAvatarStatus] = useState<AvatarStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const avatarRef = useRef<StreamingAvatar | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Initialize HeyGen avatar when widget opens
  useEffect(() => {
    if (isOpen && avatarStatus === "idle") {
      initAvatar();
    }
    if (!isOpen && avatarRef.current) {
      avatarRef.current.stopAvatar();
      avatarRef.current = null;
      setAvatarStatus("idle");
    }
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hey — I'm TJ's digital twin. Ask me about my work, what I'm building, or how I think about things.",
        },
      ]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const initAvatar = useCallback(async () => {
    setAvatarStatus("connecting");
    try {
      const tokenRes = await fetch("/api/heygen-token", { method: "POST" });
      const { token } = await tokenRes.json();
      if (!token) throw new Error("No token");

      const avatar = new StreamingAvatar({ token });
      avatarRef.current = avatar;

      avatar.on(StreamingEvents.AVATAR_START_TALKING, () => setIsSpeaking(true));
      avatar.on(StreamingEvents.AVATAR_STOP_TALKING, () => setIsSpeaking(false));
      avatar.on(StreamingEvents.STREAM_READY, (stream) => {
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
        setAvatarStatus("ready");
      });
      avatar.on(StreamingEvents.STREAM_DISCONNECTED, () => {
        setAvatarStatus("idle");
      });

      await avatar.createStartAvatar({
        avatarName: AVATAR_ID,
        quality: AvatarQuality.Medium,
      });
    } catch (err) {
      console.error("HeyGen avatar init failed:", err);
      setAvatarStatus("error");
    }
  }, []);

  const speakResponse = useCallback(async (text: string) => {
    if (!avatarRef.current || avatarStatus !== "ready") return;
    try {
      await avatarRef.current.speak({
        text,
        taskType: TaskType.REPEAT,
      });
    } catch {
      // avatar speak failed silently
    }
  }, [avatarStatus]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;
      setError(null);

      const userMessage: Message = { role: "user", content: text };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch(BRAIN_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: messages.slice(-6),
          }),
        });

        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.text },
        ]);

        await speakResponse(data.text);
      } catch {
        setError("Something went wrong. Try again.");
        setMessages((prev) => prev.slice(0, -1));
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages, speakResponse]
  );

  const startListening = useCallback(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [sendMessage]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const stopSpeaking = useCallback(() => {
    avatarRef.current?.stopAvatar();
    setIsSpeaking(false);
  }, []);

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 hover:bg-indigo-500 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Talk to TJ's digital twin"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-200" />
        </span>
        Talk to TJ
      </motion.button>

      {/* Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed bottom-6 right-6 z-50 flex w-[min(440px,calc(100vw-2rem))] flex-col rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ maxHeight: "min(680px, calc(100vh - 3rem))" }}
            >
              {/* Avatar video area */}
              <div className="relative bg-zinc-950 w-full aspect-video overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    avatarStatus === "ready" ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Overlay when not ready */}
                {avatarStatus !== "ready" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="h-16 w-16 rounded-full bg-indigo-600/20 ring-1 ring-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl font-bold">
                      TJ
                    </div>
                    {avatarStatus === "connecting" && (
                      <p className="text-xs text-zinc-500 animate-pulse">
                        Connecting…
                      </p>
                    )}
                    {avatarStatus === "error" && (
                      <p className="text-xs text-red-400">
                        Avatar unavailable
                      </p>
                    )}
                  </div>
                )}

                {/* Speaking indicator */}
                {isSpeaking && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-1 w-1 rounded-full bg-indigo-400"
                        animate={{ scaleY: [1, 2.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                    <span className="text-xs text-zinc-300 ml-1">Speaking</span>
                  </div>
                )}

                {/* Close + stop buttons */}
                <div className="absolute top-2 right-2 flex gap-1">
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="rounded-lg p-1.5 bg-black/50 text-zinc-400 hover:text-white transition-colors"
                      title="Stop speaking"
                    >
                      <StopIcon />
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-1.5 bg-black/50 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-zinc-100">TJ Bush</p>
                  <p className="text-xs text-zinc-500">Digital Twin · AI & Product Leader</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-indigo-600 text-white rounded-br-sm"
                          : "bg-zinc-800 text-zinc-200 rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-zinc-800 rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1 items-center">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-zinc-500"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <p className="text-center text-xs text-red-400">{error}</p>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-white/8 px-3 py-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage(input);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything…"
                    disabled={isLoading || isListening}
                    className="flex-1 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:ring-1 focus:ring-indigo-500/50 disabled:opacity-50 transition-all"
                  />
                  <button
                    type="button"
                    onMouseDown={startListening}
                    onMouseUp={stopListening}
                    onTouchStart={startListening}
                    onTouchEnd={stopListening}
                    disabled={isLoading}
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isListening
                        ? "bg-red-500/20 text-red-400 ring-1 ring-red-500/40"
                        : "bg-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700"
                    } disabled:opacity-50`}
                    title="Hold to speak"
                  >
                    <MicIcon />
                  </button>
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <SendIcon />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="4" y="4" width="8" height="8" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="5.5" y="1.5" width="5" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 7.5a5 5 0 0010 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 12.5v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.5 2.5L7 9M13.5 2.5L9 13.5L7 9M13.5 2.5L2.5 6.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
