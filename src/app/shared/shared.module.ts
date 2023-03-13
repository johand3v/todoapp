import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReapleSpacePipe } from './pipes/reaple-space.pipe';
import { ImagBrokenDirective } from './directives/imag-broken.directive';



@NgModule({
  declarations: [
    ReapleSpacePipe,
    ImagBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReapleSpacePipe,
    ImagBrokenDirective
  ],
  providers: [
    ReapleSpacePipe
  ]
})
export class SharedModule { }
