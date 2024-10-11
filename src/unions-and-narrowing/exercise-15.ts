type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.sideLength * shape.sideLength;
    default:
      throw new Error("Unsupported shape type");
  }
}
