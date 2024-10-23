type YouSayGoodbyeAndISayHello<T> = T extends "hello"
  ? "goodbye"
  : T extends "goodbye"
  ? "hello"
  : never;
