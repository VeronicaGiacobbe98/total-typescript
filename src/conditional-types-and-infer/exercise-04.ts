type GetSurname<T> = T extends `${infer _FirstName} ${infer LastName}`
  ? LastName
  : never;
