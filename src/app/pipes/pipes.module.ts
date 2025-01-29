import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from "./address.pipe";
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';


@NgModule({
  declarations: [
    AddressPipe,  
    PhonePipe, 
    StatusPipe, 
    DashIfEmptyPipe
  ],
  exports: [
    AddressPipe,
    PhonePipe,
    StatusPipe,
    DashIfEmptyPipe
  ]
})
export class PipesModule {

}
