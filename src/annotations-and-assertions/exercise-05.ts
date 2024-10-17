const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  const { name } = searchParams;

  if (name) {
    return users.filter((user) => user.name.includes(name));
  }

  return users;
};
