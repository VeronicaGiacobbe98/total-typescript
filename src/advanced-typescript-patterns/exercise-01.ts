type Email = string & { __brand: "Email" };
type Password = string & { __brand: "Password" };

const onSubmitHandler = (values: { email: string; password: string }) => {
  const validatedValues = validateValues(values);
  createUserOnApi(validatedValues);
};

export const validateValues = (values: {
  email: string;
  password: string;
}): { email: Email; password: Password } => {
  if (!values.email.includes("@")) {
    throw new Error("Email invalid");
  }
  if (values.password.length < 8) {
    throw new Error("Password not long enough");
  }

  return {
    email: values.email as Email,
    password: values.password as Password,
  };
};

const createUserOnApi = (values: { email: Email; password: Password }) => {};
