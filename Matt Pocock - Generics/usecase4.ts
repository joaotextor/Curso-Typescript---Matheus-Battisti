// You don't always have to pass the types to a generic
// function!

const addIdToObject = <T>(obj: T) => {
  return {
    ...obj,
    id: "123",
  };
};

// const result = addIdToObject<{
//   firstName: string;
//   lastName: string;
// }>({
//   firstName: "Matt",
//   lastName: "Pocock",
// });

// The code below works because TypeScript infers the type from the runtime object passed as argument.
const result = addIdToObject({
  firstName: "Matt",
  lastName: "Pocock",
});

console.log(result);
