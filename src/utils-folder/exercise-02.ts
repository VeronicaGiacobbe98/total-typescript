const createStringMap = <T = string>() => {
  return new Map<string, T>();
};

const stringMap = createStringMap();

stringMap.set("bar", "hello");

const numberMap = createStringMap<number>();
numberMap.set("foo", 123);
