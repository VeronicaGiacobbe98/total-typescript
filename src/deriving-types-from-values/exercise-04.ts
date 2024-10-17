const createUser = (id: string) => {
  return {
    id,
    name: "John Doe",
    email: "example@email.com",
  };
};

type User = ReturnType<typeof createUser>;
