import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { JsComponent } from './js.component';
import { MapPageComponent } from './map-page/map-page.component';
import { PrototypePageComponent } from './prototype-page/prototype-page.component';
import { CallBindApplyComponent } from './call-bind-apply/call-bind-apply.component';
import { ClosuresComponent } from './closures/closures.component';
import { EventLoopComponent } from './event-loop/event-loop.component';
import { PromisePageComponent } from './promise-page/promise-page.component';
import { ObjectCreateGettersSettersComponent } from './object-create-getters-setters/object-create-getters-setters.component';
import { EsClassesComponent } from './es-classes/es-classes.component';
import { FetchAsyncAwaitComponent } from './fetch-async-await/fetch-async-await.component';


@NgModule({
  declarations: [
    JsComponent,
    MapPageComponent,
    PrototypePageComponent,
    CallBindApplyComponent,
    ClosuresComponent,
    EventLoopComponent,
    PromisePageComponent,
    ObjectCreateGettersSettersComponent,
    EsClassesComponent,
    FetchAsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
