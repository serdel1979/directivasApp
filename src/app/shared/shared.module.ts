import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directivas/error-msg.directive';
import { CursomIfDirective } from './directivas/cursom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CursomIfDirective
  ],
  exports:[
    ErrorMsgDirective,
    CursomIfDirective
  ]
})
export class SharedModule { }
