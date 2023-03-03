import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reapleSpace'
})
export class ReapleSpacePipe implements PipeTransform {

  // TODO Nickname: Hola hoy pepe => hola-soy-pepe
  transform(value: string, args: string): string {
    value = value.split(' ').join(args).toLowerCase();
    return value;
  }

}
