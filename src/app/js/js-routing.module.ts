import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsComponent } from './js.component';
import {MapPageComponent} from './map-page/map-page.component';
import {PrototypePageComponent} from './prototype-page/prototype-page.component';

const routes: Routes = [
  {
    path: '',
    component: JsComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  },
  {
    path: 'prototype',
    component: PrototypePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
