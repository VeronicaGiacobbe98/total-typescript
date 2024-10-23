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

const getters: AttributeGetters = {
  getFirstName: () => "John",
  getLastName: () => "Doe",
  getAge: () => 30,
};

console.log(getters.getFirstName());
console.log(getters.getLastName());
console.log(getters.getAge());
