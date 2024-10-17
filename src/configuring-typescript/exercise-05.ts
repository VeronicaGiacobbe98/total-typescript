type StrictOmit<T, K extends "a"> = Omit<T, K>;

type ValidOmission = StrictOmit<{ a: string; b: number }, "a">;
