export const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};
