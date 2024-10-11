interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductInfo = Partial<Omit<Product, "id">>;

const updateProduct = (id: number, productInfo: ProductInfo) => {
  console.log(`Updating product with ID: ${id}`, productInfo);
};

updateProduct(1, {
  name: "Book",
});

updateProduct(1, {
  price: 12.99,
});

updateProduct(1, {
  description: "A book about Dragons",
});

updateProduct(1, {
  name: "Book",
  price: 12.99,
});

updateProduct(1, {
  name: "Book",
  description: "A book about Dragons",
});
