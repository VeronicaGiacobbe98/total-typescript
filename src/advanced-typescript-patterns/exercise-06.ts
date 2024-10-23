import "dotenv/config";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV_VAR: string;
    }
  }
}

process.env.MY_ENV_VAR = "Hello, world!";
