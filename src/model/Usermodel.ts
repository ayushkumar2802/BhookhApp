// Models/UserModel.ts
export class UserModel {
    private validUsername = "user";
    private validPassword = "password";
  
    validateCredentials(username: string, password: string): boolean {
      return username === this.validUsername && password === this.validPassword;
    }
  }
  