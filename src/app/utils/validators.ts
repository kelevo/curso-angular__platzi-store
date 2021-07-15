import { AbstractControl } from '@angular/forms'

export class MyValidators {
    // No permitir ingresar precios mayores a una cantidad dada
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        // Ya podemos hacer la validacion
        if (value > 10000) {
            return { price_inalid: true }
        }
        return null;
    }
}