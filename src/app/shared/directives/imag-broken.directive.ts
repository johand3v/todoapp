import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagBroken]'
})
export class ImagBrokenDirective {
  @HostListener('error') handleError(){
    console.log('Algo sucedio', this.elHost.nativeElement)
    const element = this.elHost.nativeElement;
    element.src = "https://www.shutterstock.com/image-vector/404-error-icon-vector-symbol-600w-1545236357.jpg";
  }

  constructor(private elHost:ElementRef) { }

}
