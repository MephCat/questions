import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ObservablePageComponent } from './observable-page/observable-page.component';


@NgModule({
  declarations: [
    RxjsComponent,
    AboutPageComponent,
    ObservablePageComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
