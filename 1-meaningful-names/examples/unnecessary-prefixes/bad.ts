export class User {
  private myName: string;
  private myAge: string;
  constructor(theName: string) {
    this.myName = theName;
  }

  getName() {
    return this.myName;
  }
  getAge() {
    return this.myAge;
  }
}
