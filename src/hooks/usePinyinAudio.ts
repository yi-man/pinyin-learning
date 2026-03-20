"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export function usePinyinAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const hasZhVoice = voices.some((v) => v.lang.startsWith("zh"));
      if (hasZhVoice) {
        setVoiceReady(true);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = useCallback(
    (pinyin: string) => {
      if (typeof window === "undefined" || !window.speechSynthesis) {
        return;
      }

      window.speechSynthesis.cancel();

      const voices = window.speechSynthesis.getVoices();
      const zhVoice = voices.find((v) => v.lang.startsWith("zh")) || null;

      const utterance = new SpeechSynthesisUtterance(pinyin);
      utterance.lang = "zh-CN";
      utterance.rate = 0.8;
      utterance.pitch = 1.1;

      if (zhVoice) {
        utterance.voice = zhVoice;
      }

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [voiceReady]
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return { speak, stop, isPlaying };
}
