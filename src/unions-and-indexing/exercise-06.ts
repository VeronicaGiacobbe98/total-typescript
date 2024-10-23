const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type FrontendToBackendValues =
  (typeof frontendToBackendEnumMap)[keyof typeof frontendToBackendEnumMap];

const backendValues: FrontendToBackendValues[] = Object.values(
  frontendToBackendEnumMap
);

console.log(backendValues);
