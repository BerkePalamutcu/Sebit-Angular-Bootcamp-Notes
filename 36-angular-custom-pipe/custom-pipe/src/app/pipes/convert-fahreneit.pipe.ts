import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertFahreneit'
})
export class ConvertFahreneitPipe implements PipeTransform {

  transform(value: number, ): number {
    return (value - 32) * (5 / 9)
  }

}
