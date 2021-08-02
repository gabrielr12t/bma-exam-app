import { PersonSelectOptions } from "./person-select-options";

export class PersonFilterQuery {
  private readonly MAXIMUM_AGE_ALLOWED = 200;
  private readonly MINIMUM_AGE_ALLOWED = 1;

  public minAge: number;
  public maxAge: number;

  private _selectedOption: PersonSelectOptions;
  get selectedOption(): PersonSelectOptions {
    return this._selectedOption;
  }

  set selectedOption(value: PersonSelectOptions) {
    this._selectedOption = value;
    switch (value) {

      case PersonSelectOptions.All:
        this.minAge = this.MINIMUM_AGE_ALLOWED;
        this.maxAge = this.MAXIMUM_AGE_ALLOWED;
        break;

      case PersonSelectOptions.Elderly:
        this.minAge = 60;
        this.maxAge = this.MAXIMUM_AGE_ALLOWED;
        break;

      case PersonSelectOptions.NotElderly:
        this.minAge = this.MINIMUM_AGE_ALLOWED;
        this.maxAge = 60;
        break;

      default:
        this.minAge = this.MINIMUM_AGE_ALLOWED;
        this.maxAge = this.MAXIMUM_AGE_ALLOWED;
        break;
    }
  }

  constructor() {
    this.minAge = this.MINIMUM_AGE_ALLOWED;
    this.maxAge = this.MAXIMUM_AGE_ALLOWED;
    this._selectedOption = PersonSelectOptions.All;
  }
}



