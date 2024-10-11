interface Scores {
  math: number;
  english: number;
  science: number;
  [key: string]: number;
}

// @ts-expect-error
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.history = 85;
