export function keys<T extends object>(): Array<keyof T>;

type RequiredOnly<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

export function requiredKeys<T extends object>(): Array<keyof RequiredOnly<T>>;