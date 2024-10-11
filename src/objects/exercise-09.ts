interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const fetchUser = async (): Promise<Pick<User, "name" | "email">> => {
  const response = await fetch("/api/user");
  const user: User = await response.json();

  return {
    name: user.name,
    email: user.email,
  };
};
console.log(fetchUser);
