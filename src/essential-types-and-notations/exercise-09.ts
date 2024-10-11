type ShoppingCart = {
  userId: string;
  items: string[];
};

export const processCart = (cart: ShoppingCart) => {
  console.log(`User ID: ${cart.userId}`);
  console.log(`Items in cart: ${cart.items.join(", ")}`);
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});
