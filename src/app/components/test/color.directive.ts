import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementRef: ElementRef) { }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.style.color = 'green';
  // }
  modifyColor(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }
}
