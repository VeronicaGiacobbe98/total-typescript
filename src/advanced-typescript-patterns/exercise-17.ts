const fetchUser = async (id: string) => {
  return {
    id,
    firstName: "John",
    lastName: "Doe",
  };
};

type ParametersOfFetchUser = Parameters<typeof fetchUser>;

type ReturnTypeOfFetchUser = Awaited<ReturnType<typeof fetchUser>>;
type ReturnTypeOfFetchUserWithFullName = ReturnTypeOfFetchUser & {
  fullName: string;
};

export const fetchUserWithFullName = async (
  ...args: ParametersOfFetchUser
): Promise<ReturnTypeOfFetchUserWithFullName> => {
  const user = await fetchUser(...args);
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};
