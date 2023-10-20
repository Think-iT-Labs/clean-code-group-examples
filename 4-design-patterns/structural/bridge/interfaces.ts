export interface ITokenManager {
  generateToken: (payload: object) => Promise<string>;
}

type UserEntity = {
  id: string;
  email: string;
  name: string;
  password?: string;
};

export interface IUserRepository {
  fetchByEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserEntity | null>;
}
