type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

type FruitObject = {
  [K in Fruit as K["name"]]: K;
};

type RegularFruitUnion = FruitObject[keyof FruitObject];
