const parseValue = (value: unknown) => {
  if (typeof value === "object" && value !== null) {
    if ("data" in value) {
      const data = (value as { data?: { id?: string } }).data;

      if (typeof data === "object" && data !== null && "id" in data) {
        const id = (data as { id: string }).id;
        return id;
      }
    }
  }

  throw new Error("Parsing error!");
};
