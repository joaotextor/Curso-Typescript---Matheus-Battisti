// Sometimes, youlll need to over ride the types inside
// the generic function with an assertion. That's OK!

//! This will show error on "return": Type 'string[]' is not assignable to type '(keyof TObj)[]'
// const typedObjectKeys = <TObj extends {}>(
//     obj: TObj
// ): Array<keyof TObj> => {
//     return Object.keys(obj);
// }

//~ Must do this
const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>; //! You should only use "as" inside highly generic functions, because TS can mess things up in those.
};

const result = typedObjectKeys({
  name: "John",
  age: 33,
});

export {};
