import React from "react";
import { add } from "./essential-types-and-notations/exercise-01";
import { concatTwoStrings } from "./essential-types-and-notations/exercise-02";
import { concatName } from "./essential-types-and-notations/exercise-04";
import {
  getRectangleArea,
  getRectanglePerimeter,
} from "./essential-types-and-notations/exercise-08";
import { processCart } from "./essential-types-and-notations/exercise-09";
import { processRecipe } from "./essential-types-and-notations/exercise-10";
import { setRange } from "./essential-types-and-notations/exercise-12";
import { goToLocation } from "./essential-types-and-notations/exercise-13";
import { CanvasNode1 } from "./typescript-classes/exercise-06";
import { CanvasNode } from "./typescript-classes/exercise-07";

const App = () => {
  add(1, 2);
  concatTwoStrings("Hello", "World");
  concatName("John", "Doe");
  getRectangleArea({ width: 10, height: 20 });
  getRectanglePerimeter({ width: 10, height: 20 });
  processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
  });
  processRecipe({
    title: "Chocolate Chip Cookies",
    instructions: "Preheat the oven to 350°F. Mix the ingredients...",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
    ],
  });

  concatName("Hello", "World");
  setRange([0, 10]);
  goToLocation([45.4642, 9.19, 120]);

  const canvasNode = new CanvasNode1();
  canvasNode.position = { x: 10, y: 20 };
  console.log(canvasNode.position);

  const node = new CanvasNode({ x: 10, y: 20, viewMode: "hidden" });
  console.log(node.getPosition());
  console.log(node.getViewMode());
  node.moveTo(30, 40);
  console.log(node.getPosition());

  return <div>Typescript exercises</div>;
};

export default App;
