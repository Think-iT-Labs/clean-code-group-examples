export enum UserCreationError {
  InvalidName = "INVALID_NAME",
  InvalidAge = "INVALID_AGE",
  Success = "SUCCESS",
}

interface User {
  name: string;
  age: number;
}

type Return = {
  data?: User | null;
  error: null | string;
};
export function createUser(name: string, age: number) {
  if (typeof name !== "string" || name.trim() === "") {
    return { error: "Invalid name" };
  }

  if (typeof age !== "number" || age <= 0) {
    return { error: "Invalid age" };
  }

  const user: User = { name, age };

  return { error: null, data: user };
}
