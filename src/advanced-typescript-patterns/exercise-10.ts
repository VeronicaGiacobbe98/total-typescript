type Valid<T> = Brand<T, "Valid">;
type Brand<T, B> = T & { __brand: B };

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

const isValidPassword = (
  values: PasswordValues
): values is Valid<PasswordValues> => {
  return values.password === values.confirmPassword;
};
