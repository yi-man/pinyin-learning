export interface PinyinCategory {
  title: string;
  pinyins: string[];
}

export interface PinyinData {
  initials: PinyinCategory;
  finals: {
    single: PinyinCategory;
    compound: PinyinCategory;
    nasal: PinyinCategory;
  };
}

export const PINYIN_DATA: PinyinData = {
  initials: {
    title: "声母",
    pinyins: [
      "b", "p", "m", "f",
      "d", "t", "n", "l",
      "g", "k", "h",
      "j", "q", "x",
      "zh", "ch", "sh", "r",
      "z", "c", "s",
      "y", "w"
    ]
  },
  finals: {
    single: {
      title: "单韵母",
      pinyins: ["a", "o", "e", "i", "u", "ü", "ê"]
    },
    compound: {
      title: "复韵母",
      pinyins: ["ai", "ei", "ui", "ao", "ou", "iu", "ie", "üe", "er"]
    },
    nasal: {
      title: "鼻韵母",
      pinyins: ["an", "en", "in", "un", "ün", "ang", "eng", "ing", "ong"]
    }
  }
};

export const ALL_PINYINS = [
  ...PINYIN_DATA.initials.pinyins,
  ...PINYIN_DATA.finals.single.pinyins,
  ...PINYIN_DATA.finals.compound.pinyins,
  ...PINYIN_DATA.finals.nasal.pinyins
];
