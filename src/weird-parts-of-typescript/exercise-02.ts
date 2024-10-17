const acceptOnlyEmptyObject = (input: Record<string, never>) => {};
acceptOnlyEmptyObject({});
