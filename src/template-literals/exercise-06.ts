type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string;
};
