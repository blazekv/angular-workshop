import { AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

export class CustomValidators {
  static isNumber = (control: AbstractControl): ValidationErrors | null => {
    return isNaN(Number(control.value)) ? { notNumber: true } : null;
  };

  static asyncIsNumber = (
    control: AbstractControl,
  ): Observable<ValidationErrors | null> => {
    return of(isNaN(Number(control.value)) ? { notNumber: true } : null).pipe(
      delay(1500),
    );
  };
}
