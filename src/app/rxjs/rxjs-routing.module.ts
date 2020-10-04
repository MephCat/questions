import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ObservablePageComponent} from './observable-page/observable-page.component';
import {SubjectPageComponent} from './subject-page/subject-page.component';
import {MulticastedPageComponent} from './multicasted-page/multicasted-page.component';
import {SchedulerPageComponent} from './scheduler-page/scheduler-page.component';

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
  },
  {
    path: 'subject',
    component: SubjectPageComponent
  },
  {
    path: 'multicasted-observable',
    component: MulticastedPageComponent
  },
  {
    path: 'scheduler',
    component: SchedulerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
