import { Pipe, PipeTransform } from '@angular/core';
import type { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    return null;
  }
}
