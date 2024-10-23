type ExtractParserResult<T> = T extends { parse: () => infer R }
  ? R
  : T extends { extract: () => infer R }
  ? R
  : T extends () => infer R
  ? R
  : never;

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type Result1 = ExtractParserResult<typeof parser1>;
type Result2 = ExtractParserResult<typeof parser2>;
type Result3 = ExtractParserResult<typeof parser3>;
