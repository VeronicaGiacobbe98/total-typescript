const isProblemOrSolution = (filename: string) => {
  const splitFilename = filename.split(".");
  const finalIndex = splitFilename.length - 1;
  const extension = splitFilename[finalIndex];
  const isProblem = extension === "problem";
  const isSolution = extension === "solution";

  return isProblem || isSolution;
};

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const usersWithIds = users.map((user, index) => ({
  ...user,
  id: index,
}));
