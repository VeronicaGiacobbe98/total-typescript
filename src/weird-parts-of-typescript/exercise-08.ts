const loggers: Array<(obj: { id: string } | { name: string }) => void> = [
  (obj) => {
    if ("id" in obj) {
      console.log(`ID: ${obj.id}`);
    }
  },
  (obj) => {
    if ("name" in obj) {
      console.log(`Name: ${obj.name}`);
    }
  },
];

const logAllWithIntersection = (obj: { id: string } & { name: string }) => {
  loggers.forEach((func) => func(obj));
};

const logAllWithObjectType = (obj: { id: string; name: string }) => {
  loggers.forEach((func) => func(obj));
};

logAllWithIntersection({ id: "123", name: "Alice" });
logAllWithObjectType({ id: "456", name: "Bob" });
