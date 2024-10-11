export type Recipe = {
  title: string;
  instructions: string;
  ingredients: {
    name: string;
    quantity: string;
  }[];
};

export const processRecipe = (recipe: Recipe) => {
  console.log(`Title: ${recipe.title}`);
  console.log(`Instructions: ${recipe.instructions}`);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) => {
    console.log(`- ${ingredient.name}: ${ingredient.quantity}`);
  });
};

processRecipe({
  title: "Chocolate Chip Cookies",
  instructions: "Preheat the oven to 350°F. Mix the ingredients...",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
});
