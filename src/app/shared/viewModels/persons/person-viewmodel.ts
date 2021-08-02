import { Person } from '../../models/persons/person';

export class PersonViewModel {
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

  static createFromModel(person: Person) {
    if (!person)
      return person;

    const model = new PersonViewModel(person.id, person.name, person.age, person.gender, person.weight, person.height);
    return model;
  }

  static createFromProperties(id: number, name: string, age: number, gender: string, weight: number, height: number) {
    const model = new PersonViewModel(id, name, age, gender, weight, height);
    return model;
  }
}
