interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<
    string & K
  >}`]: () => Attributes[K];
};
