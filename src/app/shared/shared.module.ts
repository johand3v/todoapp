import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReapleSpacePipe } from './pipes/reaple-space.pipe';



@NgModule({
  declarations: [
    ReapleSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReapleSpacePipe
  ],
  providers: [
    ReapleSpacePipe
  ]
})
export class SharedModule { }
