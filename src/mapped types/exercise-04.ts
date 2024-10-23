interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type IdKey<T> = {
  [K in keyof T as K extends `${infer _Prefix}id${infer _Suffix}`
    ? K
    : never]: T[K];
};

type OnlyIdKeys<T> = IdKey<T>;

type Result = OnlyIdKeys<Example>;
