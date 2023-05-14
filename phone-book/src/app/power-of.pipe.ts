import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf',
})
export class PowerOfPipe implements PipeTransform {
  transform(x: number, y: number): number {
    return Math.pow(x, y);
  }
}
