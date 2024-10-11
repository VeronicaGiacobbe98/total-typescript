export type Rectangle = {
  width: number;
  height: number;
};

export const getRectangleArea = (rectangle: Rectangle): number => {
  return rectangle.width * rectangle.height;
};

export const getRectanglePerimeter = (rectangle: Rectangle): number => {
  return 2 * (rectangle.width + rectangle.height);
};

const myRectangle: Rectangle = {
  width: 5,
  height: 10,
};

console.log(`Area: ${getRectangleArea(myRectangle)}`);
console.log(`Perimeter: ${getRectanglePerimeter(myRectangle)}`);
