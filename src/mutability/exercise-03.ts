type User = {
  readonly id: number;
  name: string;
  age: number;
};

const updateUser = (user: User) => {
  user.name = "Jane Doe";
  user.age = 30;

  // @ts-expect-error
  user.id = 1;
};

console.log(updateUser);
