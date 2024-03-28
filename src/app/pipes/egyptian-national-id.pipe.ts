import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianNationalId',
  standalone: true
})
export class EgyptianNationalIdPipe implements PipeTransform {

  transform(value: string, datePart: string): string {
    if (!value || value.length !== 14) {
      return 'Invalid national ID';
    }

    const year = value.substring(1, 3);
    const month = value.substring(3, 5);
    const day = value.substring(5, 7);
    const fullYear = '19' + year; 

    switch (datePart) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return `${day}-${month}-${fullYear}`;
      default:
        return 'Invalid date part';
    }
  }

}
