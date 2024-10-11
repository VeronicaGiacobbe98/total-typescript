type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function calculateArea({ kind, ...rest }: Shape) {
  if (kind === "circle") {
    const { radius } = rest as Circle;
    return Math.PI * radius * radius;
  } else {
    const { sideLength } = rest as Square;
    return sideLength * sideLength;
  }
}
