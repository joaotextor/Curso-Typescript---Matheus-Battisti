export const createSet = <T = string>() => {
  // Default string
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();

const otherStringSet = createSet(); //Infers as string, which is deafult.
