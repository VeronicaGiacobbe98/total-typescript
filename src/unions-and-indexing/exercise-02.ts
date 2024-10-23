type Animal = "dog" | "cat" | "fish" | "bird";
type CatAndFish = Extract<Animal, "cat" | "fish">;
