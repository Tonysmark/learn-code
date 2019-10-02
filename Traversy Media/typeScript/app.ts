"use stric";
interface Person {
  firstname: string;
  lastname: string;
  [age: number]: number;
}
function pow(x: number, y: number): number {
  return Math.pow(x, y);
}

// tuple
type myList = [number, string, boolean, object?];
const arr: myList = [1, "lalal", false];

// Generics

class Observable<T> {
  constructor(public value: T) {}
}
