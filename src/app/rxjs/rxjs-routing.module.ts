import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ObservablePageComponent} from './observable-page/observable-page.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'observable',
    component: ObservablePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
