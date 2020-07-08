import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ForbiddenNameValidator(name: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = name.test(control.value.toLowerCase());
    return forbidden ? { 'forbiddenName' : { value: control.value } } : null;
  };
}
