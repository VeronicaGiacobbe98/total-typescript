interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  (Object.keys(user) as (keyof User)[]).forEach((key) => {
    console.log(user[key]);
  });
}
