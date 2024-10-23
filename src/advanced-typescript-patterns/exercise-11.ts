type Brand<T, U> = T & { __brand: U };
type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
  password: string;
  confirmPassword: string;
}

function assertIsValidPassword(
  values: PasswordValues
): asserts values is Valid<PasswordValues> {
  if (values.password !== values.confirmPassword) {
    throw new Error("Password is invalid");
  }
}
