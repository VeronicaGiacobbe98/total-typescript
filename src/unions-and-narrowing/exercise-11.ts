const throwError = (message: string) => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  const id = params.id || throwError("No id provided");

  return id;
};
