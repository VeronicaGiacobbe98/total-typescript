type SearchParams = {
  q?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: "asc" | "desc";
};

type ReadonlySearchParams = Readonly<SearchParams>;

const handleSearchParams = (search: ReadonlySearchParams) => {
  // @ts-expect-error
  search.q = "test";

  // @ts-expect-error
  search.page = 1;

  // @ts-expect-error
  search.pageSize = 10;

  // @ts-expect-error
  search.sort = "name";

  // @ts-expect-error
  search.order = "asc";
};

console.log(handleSearchParams);
