export enum UserCreationError {
  InvalidName = "INVALID_NAME",
  InvalidAge = "INVALID_AGE",
  Success = "SUCCESS",
}

interface User {
  name: string;
  age: number;
}

export function createUser(
  name: string,
  age: number
): UserCreationError | User {
  if (typeof name !== "string" || name.trim() === "") {
    return UserCreationError.InvalidName;
  }

  if (typeof age !== "number" || age <= 0) {
    return UserCreationError.InvalidAge;
  }

  const user: User = { name, age };
  return user;
}
