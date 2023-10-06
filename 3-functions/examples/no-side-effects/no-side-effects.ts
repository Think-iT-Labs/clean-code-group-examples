import { users, createUserSession } from "./db";
import { User } from "./utils";

function fetchUserById(userId: number): User | null {
  const user = users.find((u) => u.id === userId);

  if (!user) return null;

  createUserSession(user);

  return user;
}

const userId = 2;
const user = fetchUserById(userId);

if (user) {
  console.log("The user was found", user);
} else {
  console.log("User not found.");
}
