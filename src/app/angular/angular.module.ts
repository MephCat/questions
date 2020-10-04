import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { DependencyInjectionPageComponent } from './dependency-injection-page/dependency-injection-page.component';


@NgModule({
  declarations: [AngularComponent, DependencyInjectionPageComponent],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
