interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const toUser = (user: any): User => {
  const { id, name } = user;
  if (typeof id !== "number" || typeof name !== "string") {
    throw new Error("Invalid User");
  }
  return { id, name };
};

const usersWithIds: User[] = users.map((user, index) => {
  return toUser({
    ...user,
    id: index,
    age: 30,
  });
});
