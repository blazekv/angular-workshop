import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication',
  standalone: true,
})
export class MultiplicationPipe implements PipeTransform {
  transform(value: number, multiplication = 2): unknown {
    console.log('Called');
    return value * multiplication;
  }
}
