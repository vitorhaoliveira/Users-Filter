import { Pipe, PipeTransform } from '@angular/core';
import type { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: IAddress): string {
    const INVALID_ADDRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      !address.numero === null || !address.numero === undefined

      if (INVALID_ADDRESS) {
        return 'Endereço indisponível ou inválido'
      }
  }
}
