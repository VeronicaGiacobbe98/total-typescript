const fetchData = async (): Promise<[Error | undefined, any?]> => {
  const result = await fetch("/");

  if (!result.ok) {
    return [new Error("Could not fetch data.")];
  }

  const data = await result.json();

  return [undefined, data];
};

const example = async () => {
  const [error, data] = await fetchData();
  console.log(error, data);
};

console.log(example);
