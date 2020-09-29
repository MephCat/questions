import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsComponent } from './js.component';
import {MapPageComponent} from './map-page/map-page.component';
import {PrototypePageComponent} from './prototype-page/prototype-page.component';
import {CallBindApplyComponent} from './call-bind-apply/call-bind-apply.component';
import {ClosuresComponent} from './closures/closures.component';
import {EventLoopComponent} from './event-loop/event-loop.component';
import {PromisePageComponent} from './promise-page/promise-page.component';
import {ObjectCreateGettersSettersComponent} from './object-create-getters-setters/object-create-getters-setters.component';
import {EsClassesComponent} from './es-classes/es-classes.component';
import {FetchAsyncAwaitComponent} from './fetch-async-await/fetch-async-await.component';
import {LocalstoragePageComponent} from './localstorage-page/localstorage-page.component';
import {DestructuringPageComponent} from './destructuring-page/destructuring-page.component';
import {SpreadRestPageComponent} from './spread-rest-page/spread-rest-page.component';

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
  },
  {
    path: 'call-bind-apply',
    component: CallBindApplyComponent
  },
  {
    path: 'closures',
    component: ClosuresComponent
  },
  {
    path: 'event-loop',
    component: EventLoopComponent
  },
  {
    path: 'promise',
    component: PromisePageComponent
  },
  {
    path: 'object-setters-getters',
    component: ObjectCreateGettersSettersComponent
  },
  {
    path: 'es6-classes',
    component: EsClassesComponent
  },
  {
    path: 'fetch',
    component: FetchAsyncAwaitComponent
  },
  {
    path: 'local-storage',
    component: LocalstoragePageComponent
  },
  {
    path: 'destructuring',
    component: DestructuringPageComponent
  },
  {
    path: 'spread-rest',
    component: SpreadRestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
