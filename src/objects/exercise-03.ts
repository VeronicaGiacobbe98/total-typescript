interface UserPartBase {
  id: string | number;
}

interface UserPart extends UserPartBase {
  name: string;
  age: number;
}

interface UserPart2 extends UserPartBase {
  phone: string;
}

type User = UserPart & UserPart2;

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
