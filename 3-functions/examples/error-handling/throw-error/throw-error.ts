interface User {
  name: string;
  age: number;
}

export function createAUser(name: string, age: number): User {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Invalid name provided");
  }

  if (typeof age !== "number" || age <= 0) {
    throw new Error("Invalid age provided");
  }

  const user: User = { name, age };
  return user;
}
