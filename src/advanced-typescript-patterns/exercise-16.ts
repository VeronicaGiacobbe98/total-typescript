class TypeSafeStringMap<TMap extends Record<string, string>> {
  private map: TMap;

  constructor() {
    this.map = {} as TMap;
  }

  get<K extends keyof TMap>(key: K): string | undefined {
    return this.map[key];
  }

  set<K extends string>(
    key: K,
    value: string
  ): TypeSafeStringMap<TMap & Record<K, string>> {
    (this.map[key] as any) = value;

    return this as TypeSafeStringMap<TMap & Record<K, string>>;
  }
}
