const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[]
) => {
  if (searchParams.name) {
    return users.filter((user) => user.name.includes(searchParams.name!));
  }

  return users;
};
