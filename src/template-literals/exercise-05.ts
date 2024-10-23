type SplitPath<Path extends string> =
  Path extends `${infer FirstPart}/${infer Rest}`
    ? [FirstPart, ...SplitPath<Rest>]
    : [Path];

type Path = "Users/John/Documents/notes.txt";
type Result = SplitPath<Path>;
