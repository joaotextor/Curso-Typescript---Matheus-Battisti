// You can pass these type parameters to
// other parts of JS, like Set and Map

const set = new Set<number>();

set.add(1);

set.add("abc");
//wont work because we are passing a string to the set
