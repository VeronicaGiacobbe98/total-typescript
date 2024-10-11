function move(direction: "up" | "left" | "down" | "right", distance: number) {}

move("up", 10);
move("left", 5);

move(
  // @ts-expect-error
  "up-right",
  10
);

move(
  // @ts-expect-error
  "down-left",
  20
);
