import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  static isNumber = (control: AbstractControl): ValidationErrors | null => {
    return isNaN(Number(control.value)) ? {notNumber: true} : null
  }

}
