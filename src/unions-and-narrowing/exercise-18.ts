type Circle = {
  kind?: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
  if (shape.kind === "square") {
    return shape.sideLength * shape.sideLength;
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}
