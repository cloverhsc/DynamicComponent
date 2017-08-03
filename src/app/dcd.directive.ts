import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDcd]'
})
export class DcdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
