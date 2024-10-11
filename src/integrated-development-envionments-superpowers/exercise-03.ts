type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {
  console.log(obj);
};

acceptsObj({
  foo: "Hello, World!",
  bar: 42,
  baz: true,
});

document.addEventListener("click", (event) => {
  console.log(event);
});
