export const setRange = (range: [x: number, y: number]) => {
  const [x, y] = range;

  console.log(`x: ${x}, y: ${y}`);
};

setRange([0, 10]);
