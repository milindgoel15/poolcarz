import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
   selector: '[appMouseHover]'
})
export class MouseHoverDirective {
   @Input('appMouseHover')
   color!: String;
   constructor(
      private element: ElementRef,
      private renderer: Renderer2
   ) {
      renderer.setStyle(element.nativeElement, 'cursor', 'pointer');
   }

   @HostListener('mouseover') onHover() {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', '#0d6efd')
   }
   @HostListener('mouseleave') onLeave() {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
   }
}
