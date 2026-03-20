import { PinyinList } from "@/components/pinyin/PinyinList";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 flex flex-col">
      <header className="py-8 px-4 text-center border-b border-emerald-100 dark:border-emerald-900/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-800 dark:text-emerald-200 tracking-tight">
          拼音学习
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
          点击拼音卡片，听标准发音
        </p>
      </header>

      <main className="flex-1 overflow-auto">
        <PinyinList />
      </main>

      <footer className="py-4 px-4 text-center text-xs text-zinc-400 dark:text-zinc-500 border-t border-emerald-100 dark:border-emerald-900/50">
        拼音学习工具 · 使用 Web Speech API 发音
      </footer>
    </div>
  );
}
