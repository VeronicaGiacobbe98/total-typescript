type Brand<T, B> = T & { __brand: B };

type AuthorizedUser = Brand<User, "AuthorizedUser">;

type User = {
  id: string;
  maxConversionAmount: number;
  name: string;
};

const getConversionRateFromApi = async (
  amount: number,
  from: string,
  to: string
) => {
  return Promise.resolve(amount * 0.82);
};

const ensureUserCanConvert = (user: User, amount: number): AuthorizedUser => {
  if (user.maxConversionAmount < amount) {
    throw new Error("User cannot convert currency");
  }
  return user as AuthorizedUser;
};

const performConversion = async (
  user: AuthorizedUser,
  to: string,
  amount: number
) => {};

const user: User = {
  id: "123",
  maxConversionAmount: 1000,
  name: "John Doe",
};

// @ts-expect-error
await performConversion(user, "USD", 100);

const authorizedUser = ensureUserCanConvert(user, 100);

await performConversion(authorizedUser, "USD", 100);
