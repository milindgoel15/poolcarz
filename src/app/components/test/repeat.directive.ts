import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat, changeText'
})
export class RepeatDirective {

  constructor(private templateref: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  // @Input() set repeat(count: Number) {
  //   for (let j = 0; j < count; j++) {
  //     this.viewContainer.createEmbeddedView(this.templateref);
  //   }
  // }

  repeatElement(count: Number) {
    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.templateref);
    }
  }

  changeElementText(count: Number) {
    for (let i = 0; i < count; i++) {
      document.getElementsByClassName('strdir')[i].innerHTML = 'Text is changed now!';
    }
  }
}
