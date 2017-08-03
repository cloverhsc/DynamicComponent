import { DynamiccomponentService } from './dynamiccomponent.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';
import { ComponentbComponent } from './componentb/componentb.component';
import { ComponentcComponent } from './componentc/componentc.component';
import { DcdDirective } from './dcd.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComponentbComponent,
    ComponentcComponent,
    DcdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [
    ComponentaComponent,
    ComponentbComponent,
    ComponentcComponent
  ],
  providers: [DynamiccomponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
