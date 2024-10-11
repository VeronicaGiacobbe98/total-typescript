interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductWithoutId = Omit<Product, "id">;

const products: Product[] = [];

const addProduct = (productInfo: ProductWithoutId) => {
  const newProduct: Product = {
    id: generateId(),
    ...productInfo,
  };

  products.push(newProduct);

  console.log("Product added:", newProduct);
};

let currentId = 1;
const generateId = (): number => currentId++;

addProduct({
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

addProduct({
  // @ts-expect-error
  id: 1,
  name: "Book",
  price: 12.99,
  description: "A book about Dragons",
});

console.log("All products:", products);
