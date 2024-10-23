const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = (typeof fruits)[number] extends "apple" | "banana"
  ? (typeof fruits)[number]
  : never;

type Fruit = (typeof fruits)[number];
