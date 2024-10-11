type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

type Entity = User | Organisation | Product;

const getAvatarImage = (entity: Entity) => {
  return {
    url: `https://via.placeholder.com/${entity.imageId}`,
    alt: `${entity.name} Avatar`,
  };
};

const user: User = { id: "1", name: "Alice", age: 30, imageId: "abc123" };
const organisation: Organisation = {
  id: "2",
  name: "OpenAI",
  address: "123 AI St",
  imageId: "def456",
};
const product: Product = {
  id: "3",
  name: "Gadget",
  price: 99.99,
  imageId: "ghi789",
};

console.log(getAvatarImage(user));
console.log(getAvatarImage(organisation));
console.log(getAvatarImage(product));
