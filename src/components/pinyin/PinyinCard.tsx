"use client";

import { memo } from "react";

interface PinyinCardProps {
  pinyin: string;
  isPlaying: boolean;
  onClick: (pinyin: string) => void;
}

function PinyinCardComponent({ pinyin, isPlaying, onClick }: PinyinCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(pinyin)}
      className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 active:scale-95 cursor-pointer select-none overflow-hidden border border-zinc-200 dark:border-zinc-700 group"
    >
      <span className="text-2xl sm:text-3xl font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
        {pinyin}
      </span>
      {isPlaying && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="absolute w-full h-full rounded-xl bg-emerald-500/20 animate-ping" />
          <span className="absolute w-full h-full rounded-xl bg-emerald-500/30" />
        </span>
      )}
    </button>
  );
}

export const PinyinCard = memo(PinyinCardComponent);
