import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCelsius'
})
export class ConvertCelsiusPipe implements PipeTransform {

  transform(value: number, ): number {
    return value * (9 / 5) + 32;
  }

}
