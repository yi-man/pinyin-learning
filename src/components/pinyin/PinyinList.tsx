"use client";

import { useState, useCallback } from "react";
import { PINYIN_DATA } from "@/data/pinyin";
import { usePinyinAudio } from "@/hooks/usePinyinAudio";
import { PinyinSection } from "./PinyinSection";

export function PinyinList() {
  const { speak, isSupported } = usePinyinAudio();
  const [playingPinyin, setPlayingPinyin] = useState<string | null>(null);

  const handlePinyinClick = useCallback(
    (pinyin: string) => {
      setPlayingPinyin(pinyin);
      speak(pinyin);
      setTimeout(() => setPlayingPinyin(null), 800);
    },
    [speak]
  );

  if (!isSupported) {
    return (
      <div className="flex items-center justify-center min-h-[200px] px-6 py-8 text-center">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6 max-w-md">
          <p className="text-amber-800 dark:text-amber-200 text-lg font-medium">
            您的浏览器不支持语音功能
          </p>
          <p className="text-amber-600 dark:text-amber-300 text-sm mt-2">
            请使用 Chrome、Edge 或 Safari 等现代浏览器
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 py-8">
      <PinyinSection
        title={PINYIN_DATA.initials.title}
        pinyins={PINYIN_DATA.initials.pinyins}
        playingPinyin={playingPinyin}
        onPinyinClick={handlePinyinClick}
      />

      <div className="max-w-3xl mx-auto mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-600 to-transparent" />
      </div>

      <div className="space-y-8">
        <PinyinSection
          title={PINYIN_DATA.finals.single.title}
          pinyins={PINYIN_DATA.finals.single.pinyins}
          playingPinyin={playingPinyin}
          onPinyinClick={handlePinyinClick}
        />

        <PinyinSection
          title={PINYIN_DATA.finals.compound.title}
          pinyins={PINYIN_DATA.finals.compound.pinyins}
          playingPinyin={playingPinyin}
          onPinyinClick={handlePinyinClick}
        />

        <PinyinSection
          title={PINYIN_DATA.finals.nasal.title}
          pinyins={PINYIN_DATA.finals.nasal.pinyins}
          playingPinyin={playingPinyin}
          onPinyinClick={handlePinyinClick}
        />
      </div>
    </div>
  );
}
