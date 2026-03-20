"use client";

import { memo } from "react";
import { PinyinCard } from "./PinyinCard";

interface PinyinSectionProps {
  title: string;
  pinyins: string[];
  playingPinyin: string | null;
  onPinyinClick: (pinyin: string) => void;
}

function PinyinSectionComponent({
  title,
  pinyins,
  playingPinyin,
  onPinyinClick,
}: PinyinSectionProps) {
  return (
    <section className="w-full max-w-3xl mx-auto mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4 pl-1 border-l-4 border-emerald-600 dark:border-emerald-500">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
        {pinyins.map((pinyin) => (
          <PinyinCard
            key={pinyin}
            pinyin={pinyin}
            isPlaying={playingPinyin === pinyin}
            onClick={onPinyinClick}
          />
        ))}
      </div>
    </section>
  );
}

export const PinyinSection = memo(PinyinSectionComponent);
