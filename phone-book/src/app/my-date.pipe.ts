import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  transform(value: string, format: string): string {
    return moment(value).format(format);
  }
}
