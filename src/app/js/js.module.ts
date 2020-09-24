import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { JsComponent } from './js.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PrototypePageComponent } from './prototype-page/prototype-page.component';


@NgModule({
  declarations: [JsComponent, MapPageComponent, PrototypePageComponent],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
