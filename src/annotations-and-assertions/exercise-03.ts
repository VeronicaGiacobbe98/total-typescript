type ParsedObject = {
  a: number;
  b: number;
};

const getObj = (): ParsedObject => {
  const obj: ParsedObject = JSON.parse('{ "a": 123, "b": 456 }');
  return obj;
};
