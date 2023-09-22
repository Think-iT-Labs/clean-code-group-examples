export class User {
  private age: number;
  private name: string;
  constructor(name: string) {
    this.name = name;
    this.age = 100;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
