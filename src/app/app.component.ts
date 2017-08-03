import { DynamiccomponentService } from './dynamiccomponent.service';
import { DcdDirective } from './dcd.directive';
import { Component, NgModule, ViewChild,
  ComponentFactoryResolver } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DcdDirective) componentHost: DcdDirective;

  selectComponentName: string;

  constructor(
    private dynamicComponentService: DynamiccomponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName));

    const viewContainerRef = this.componentHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory)
  }
}
