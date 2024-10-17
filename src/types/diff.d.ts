declare module "diff" {
  export function diffChars(oldStr: string, newStr: string): Array<Diff>;
  export interface Diff {
    value: string;
    count?: number;
    added?: boolean;
    removed?: boolean;
  }
}
