import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { JsComponent } from './js.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PrototypePageComponent } from './prototype-page/prototype-page.component';
import { CallBindApplyComponent } from './call-bind-apply/call-bind-apply.component';


@NgModule({
  declarations: [
    JsComponent,
    MapPageComponent,
    PrototypePageComponent,
    CallBindApplyComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
