import { UserSelectOptions } from "./user-select-options";

export class UserFilterQuery {
  private readonly MAXIMUM_AGE_ALLOWED = 200;
  private readonly MINIMUM_AGE_ALLOWED = 1;

  public minAge: number;
  public maxAge: number;

  private _selectedOption: UserSelectOptions;
  get selectedOption(): UserSelectOptions {
    return this._selectedOption;
  }

  set selectedOption(value: UserSelectOptions) {
    this._selectedOption = value;
    switch (value) {

      case UserSelectOptions.All:
        this.minAge = this.MINIMUM_AGE_ALLOWED;
        this.maxAge = this.MAXIMUM_AGE_ALLOWED;
        break;

      case UserSelectOptions.Elderly:
        this.minAge = 60;
        this.maxAge = this.MAXIMUM_AGE_ALLOWED;
        break;

      case UserSelectOptions.NotElderly:
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
    this._selectedOption = UserSelectOptions.All;
  }
}



