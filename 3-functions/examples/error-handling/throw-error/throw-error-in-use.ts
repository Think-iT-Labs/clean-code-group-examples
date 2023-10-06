import { createAUser } from "./throw-error";

const username = "John Doe";
const age = 30;

try {
  const result = createAUser(username, age);
  console.log("Successfully created user", result);
} catch (error) {
  console.log(error.message);
}
