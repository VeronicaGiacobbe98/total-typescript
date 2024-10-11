type User = {
  id: number;
  name: string;
};

type ApiResponse = ["success", User[]] | ["error", string];

async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return ["error", "An error occurred"];
    }
    const data: User[] = await response.json();
    return ["success", data];
  } catch (error) {
    return ["error", "An error occurred"];
  }
}

async function exampleFunc() {
  const [status, value] = await fetchData();

  if (status === "success") {
    console.log(value);
    console.error(value);
  }
}
