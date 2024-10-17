type DataWithId = {
  data: {
    id: string;
  };
};

const hasDataAndId = (value: unknown): value is DataWithId => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as { data?: unknown };

  if (!("data" in obj) || typeof obj.data !== "object" || obj.data === null) {
    return false;
  }

  const dataObj = obj.data as { id?: unknown };
  return "id" in dataObj && typeof dataObj.id === "string";
};

const parseValue = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

const parseValueAgain = (value: unknown) => {
  if (hasDataAndId(value)) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};
