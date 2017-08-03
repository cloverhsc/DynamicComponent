import { ComponentcComponent } from './componentc/componentc.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { Injectable } from '@angular/core';


@Injectable()
export class DynamiccomponentService {
  private components = {
    componentA: ComponentaComponent,
    componentB: ComponentbComponent,
    componentC: ComponentcComponent
  }
  constructor() { }

  getComponent(componentName) {
    return this.components[componentName];
  }
}
