class TypeSafeStringMap<TMap extends Record<string, string> = {}> {
  private map: TMap;

  constructor() {
    this.map = {} as TMap;
  }

  get<K extends keyof TMap>(key: K): TMap[K] {
    return this.map[key];
  }

  set<K extends string, V extends string>(
    key: K,
    value: V
  ): TypeSafeStringMap<TMap & Record<K, V>> {
    (this.map[key] as any) = value;

    return this as any;
  }
}
