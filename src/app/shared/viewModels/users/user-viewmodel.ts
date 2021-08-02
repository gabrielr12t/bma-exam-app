import { User } from './../../models/users/user';

export class UserViewModel {
  public id: number;
  public name: string;
  public age: number;
  public gender: string;
  public weight: number;
  public height: number;

  get elderly(): boolean {
    return this.age >= 60;
  }

  constructor(id: number, name: string, age: number, gender: string, weight: number, height: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
  }

  static createFromModel(user: User) {
    if (!user)
      return user;

    const model = new UserViewModel(user.id, user.name, user.age, user.gender, user.weight, user.height);
    return model;
  }

  static createFromProperties(id: number, name: string, age: number, gender: string, weight: number, height: number) {
    const model = new UserViewModel(id, name, age, gender, weight, height);
    return model;
  }
}
