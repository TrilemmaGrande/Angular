import { isFormArray, ValidatorFn } from "@angular/forms";

export const atLeasteOneValue: ValidatorFn = function(control) {
    if (!isFormArray(control)){
        return null;
    }
    if (control.controls.some(e1 => !!e1.value)){
        return null;
    }else{
        return {atLeasteOneValue: true}
    }
}

export const isbnFormat: ValidatorFn = function(control){
    if (!control.value || typeof control.value !== 'string'){
        return null;
    }

    const isbnWithoutDashes = control.value.replace(/-/g, '');
    const length = isbnWithoutDashes.length;

    if (length === 10 || length === 13) {
        return null;
    }else {
        return {isbnFormat: true};
    }
}