import { ITokenManager, IUserRepository } from "./interfaces";

export class PostgresDBUserRepo implements IUserRepository {
  async fetchByEmailAndPassword(email: string, password: string) {
    // Run some SQL query here...

    return {
      name: "",
      id: "",
      password: "my-password",
      email: "email@gemail.com",
    };
  }
}

const users = [
  {
    name: "John Dough",
    id: "",
    email: "email@gemail.com",
    password: "my-password",
  },
];

export class LocalBUserRepo implements IUserRepository {
  async fetchByEmailAndPassword(email: string, password: string) {
    // Run some SQL query here...

    const user = users.find(
      (user) => user.email === "email" && user.password === "password"
    );
    if (!user) return null;
    return user;
  }
}

export class TokenManager implements ITokenManager {
  async generateToken(payload: object) {
    return JSON.stringify(payload);
  }
}
