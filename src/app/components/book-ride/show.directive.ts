import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
   selector: '[appShow]',
   exportAs: 'rides'

})
export class ShowDirective {
   public hasView = false;

   constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
   ) { }

   rideShow(condition: Boolean) {
      if (!condition && !this.hasView) {
         this.viewContainer.createEmbeddedView(this.templateRef);
         this.hasView = true;
      }
      else {
         this.viewContainer.clear();
         this.hasView = false;
      }
   }
}