import { ITokenManager, IUserRepository } from "./interfaces";
import { InvalidLoginCredentials } from "./erorr";

type LoginInput = {
  email: string;
  password: string;
};

export class LoginWithPassword {
  constructor(
    private userRepo: IUserRepository,
    private tokenManager: ITokenManager
  ) {}
  public async loginUser(input: LoginInput) {
    const user = await this.getUser(input);
    const accessToken = await this.tokenManager.generateToken({
      email: user.email,
      id: user.id,
    });

    const refreshToken = await this.tokenManager.generateToken({ id: user.id });
    return { user, accessToken, refreshToken };
  }

  private async getUser(data: LoginInput) {
    const user = await this.userRepo.fetchByEmailAndPassword(
      data.email,
      data.password
    );

    if (!user) throw new InvalidLoginCredentials();
    return user;
  }
}
