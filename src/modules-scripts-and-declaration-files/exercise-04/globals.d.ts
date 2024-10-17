export {};

declare global {
  const DEBUG: {
    getState(): { id: string };
  };
}
