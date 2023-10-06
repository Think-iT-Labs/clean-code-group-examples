import { users, createUserSession } from "./db";
import { User } from "./utils";

function fetchUserById(userdb: User[], userId: number): User | null {
  const user = userdb.find((u) => u.id === userId);
  if (!user) return null;
  return user;
}

const userId = 2;
const user = fetchUserById(users, userId);

if (user) {
  createUserSession(user);
  console.log("The user was found", user);
} else {
  console.log("User not found.");
}
