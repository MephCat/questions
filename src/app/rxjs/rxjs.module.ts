import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ObservablePageComponent } from './observable-page/observable-page.component';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { MulticastedPageComponent } from './multicasted-page/multicasted-page.component';
import { SchedulerPageComponent } from './scheduler-page/scheduler-page.component';
import { OperatorsAndPipePageComponent } from './operators-and-pipe-page/operators-and-pipe-page.component';
import { CreateOperatorsPageComponent } from './create-operators-page/create-operators-page.component';


@NgModule({
  declarations: [
    RxjsComponent,
    AboutPageComponent,
    ObservablePageComponent,
    SubjectPageComponent,
    MulticastedPageComponent,
    SchedulerPageComponent,
    OperatorsAndPipePageComponent,
    CreateOperatorsPageComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
