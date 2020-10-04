import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularComponent } from './angular.component';
import {DependencyInjectionPageComponent} from './dependency-injection-page/dependency-injection-page.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent
  },
  {
    path: 'di',
    component: DependencyInjectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
