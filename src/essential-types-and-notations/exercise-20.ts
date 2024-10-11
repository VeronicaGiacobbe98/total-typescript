async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data: number = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();
  return data;
};

console.log(example);
