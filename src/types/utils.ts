export type Entries<T> = Array<keyof T extends infer U ? (U extends keyof T ? [U, T[U]] : never) : never>;
export type ArrayElem<ArrayType extends readonly unknown[]> =
  ArrayType extends ReadonlyArray<infer ElementType> ? ElementType : never;
