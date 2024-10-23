declare global {
  interface DispatchableEvent {
    LOG_IN: {
      username: string;
      password: string;
    };
  }

  type UnionOfDispatchableEvents = {
    [K in keyof DispatchableEvent]: {
      type: K;
    } & DispatchableEvent[K];
  }[keyof DispatchableEvent];
}
