type User = {
  id: string;
};

type ApiResponse = [true, User[]] | [false, string];

async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [false, "An error occurred"];
    }

    const data = await response.json();
    return [true, data];
  } catch (error) {
    return [false, "An error occurred"];
  }
}

async function exampleFunc() {
  const [succeeded, value] = await fetchData();

  if (succeeded) {
    console.log(value);
  } else {
    console.error(value);
  }
}
