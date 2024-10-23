type UserWithName = {
  firstName: string;
  lastName: string;
};

export const concatenateFirstNameAndLastName = <T extends UserWithName>(
  user: T
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const users = [
  {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
  },
];

const updatedUsers = users.map(concatenateFirstNameAndLastName);

console.log(updatedUsers);
