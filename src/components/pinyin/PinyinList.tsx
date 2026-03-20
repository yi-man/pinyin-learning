"use client";

import { PINYIN_DATA } from "@/data/pinyin";
import { usePinyinAudio } from "@/hooks/usePinyinAudio";
import { useCallback, useState } from "react";
import { PinyinSection } from "./PinyinSection";

export function PinyinList() {
  const { speak } = usePinyinAudio();
  const [playingPinyin, setPlayingPinyin] = useState<string | null>(null);

  const handlePinyinClick = useCallback(
    (pinyin: string) => {
      setPlayingPinyin(pinyin);
      speak(pinyin);
      setTimeout(() => setPlayingPinyin(null), 800);
    },
    [speak]
  );

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
