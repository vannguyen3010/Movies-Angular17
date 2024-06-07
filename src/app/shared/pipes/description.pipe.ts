import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value: any, args?: number): any {
    return `${value.substring(0, args)}...`; // cho các dòng text quá số dòng sẽ là ...
  }

}
