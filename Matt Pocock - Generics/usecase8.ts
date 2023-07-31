const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  return obj[key];
};

const result = getValue(
  {
    a: 1,
    b: "some-string",
    c: true,
  },
  "a"
);

console.log(result);

export {};
