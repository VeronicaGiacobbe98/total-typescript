export const isDivElement = (element: unknown): element is HTMLDivElement => {
  return element instanceof HTMLDivElement;
};

export const isBodyElement = (element: unknown): element is HTMLBodyElement => {
  return element instanceof HTMLBodyElement;
};

interface DOMNodeExtractorConfig<T, Result> {
  isNode: (node: unknown) => node is T;
  transform: (node: T) => Result;
}

const createDOMNodeExtractor = <T, TResult>(
  config: DOMNodeExtractorConfig<T, TResult>
) => {
  return (nodes: unknown[]): TResult[] => {
    return nodes.filter(config.isNode).map(config.transform);
  };
};
