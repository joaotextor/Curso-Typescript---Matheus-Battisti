import { z } from "zod";

//! This is not safe at runtime, because the data returned by the API couuld not be of the expected type.

// const makeZodSafeFetch = <TData>(url: string): Promise<TData> => {
//   return fetch(url).then((res) => res.json());
// };

// const result = makeZodSafeFetch<{
//   firstName: string;
//   lastName: string;
// }>("/api/endpoint").then((res) => {
//   console.log(res);
// });

//! Instead, we can use a schema definition library to make sure what is coming back is what we think it's actually coming back

const makeZodSafeFetch = <TData>(
  url: string,
  schema: z.Schema<TData>
): Promise<TData> => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return schema.parse(res);
    });
};

const result = makeZodSafeFetch(
  //! Now the type argument is infered by the zod object argument
  "/api/endpoint",
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    id: z.string(),
  })
).then((res) => {
  console.log(res);
});

export {};
