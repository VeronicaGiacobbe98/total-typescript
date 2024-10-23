type Maybe<T> = T extends null | undefined ? never : T | null | undefined;
