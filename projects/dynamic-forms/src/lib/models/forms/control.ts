import { Option } from './option';
import { Validator } from '../validators/validator';
import { ValidatorFn, Validators } from '@angular/forms';

export abstract class Control {
  public validators: ValidatorFn[];
  public name: string;
  public label: string;
  constructor(control: any) {
    this.label = control.label;
    this.name = control.name;
    this.validators = control.validators.map(validator => {
      return new Validator(validator.type, validator.argument);
    });
  }
}