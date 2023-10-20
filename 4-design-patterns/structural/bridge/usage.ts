import {
  LocalBUserRepo,
  PostgresDBUserRepo,
  TokenManager,
} from "./implementations";
import { LoginWithPassword } from "./login";

const localDB = new LocalBUserRepo();
const sqlDB = new PostgresDBUserRepo();
const tokenManager = new TokenManager();

const loginUserLocal = new LoginWithPassword(localDB, tokenManager);
const loginUserDB = new LoginWithPassword(sqlDB, tokenManager);

console.log(
  loginUserDB.loginUser({ email: "soem-email", password: "password" })
);

console.log(
  loginUserLocal.loginUser({ email: "soem-email", password: "password" })
);
