interface BaseConfiguration {
  apiBaseUrl: string;
  timeout: number;
}

type Exact<T, U extends T> = U & {
  [K in keyof U]: K extends keyof T ? U[K] : never;
};

type DevelopmentConfig = Exact<
  BaseConfiguration,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;

type ProductionConfig = Exact<
  BaseConfiguration,
  {
    apiBaseUrl: string;
    timeout: number;
  }
>;

type StagingConfig = Exact<
  BaseConfiguration,
  {
    apiBaseUrl: string;
    timeout: number;
    notAllowed?: never;
  }
>;

const configurations: {
  development: DevelopmentConfig;
  production: ProductionConfig;
  staging: StagingConfig;
} = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
    // @ts-expect-error
    notAllowed: true,
  },
};

type Environment = keyof typeof configurations;
