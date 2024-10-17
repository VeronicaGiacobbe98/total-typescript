interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  roles: string[];
}

function assertIsAdminUser(user: User | AdminUser): asserts user is AdminUser {
  if (!("roles" in user)) {
    throw new Error("User is not an admin");
  }
}

const handleRequest = (user: User | AdminUser) => {
  assertIsAdminUser(user);
};
