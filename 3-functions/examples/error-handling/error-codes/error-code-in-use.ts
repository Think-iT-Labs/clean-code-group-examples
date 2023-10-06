import { UserCreationError, createUser } from "./error-code-example";

const userName = "John Doe";
const userAge = 30;

const result = createUser(userName, userAge);

if (result === UserCreationError.Success) {
  console.log("User created successfully.");
} else if (result === UserCreationError.InvalidName) {
  console.log("Invalid name provided.");
} else if (result === UserCreationError.InvalidAge) {
  console.log("Invalid age provided.");
} else {
  console.log("An unexpected error occurred.");
}
