import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat',
  standalone: true
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 16) {
      return 'Invalid credit card number';
    }

    const formattedValue = value?.match(/.{1,4}/g)?.join(' - ');
    return formattedValue || 'Invalid credit card number';
  }

}
