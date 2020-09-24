import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeScriptRoutingModule } from './type-script-routing.module';
import { TypeScriptComponent } from './type-script.component';


@NgModule({
  declarations: [TypeScriptComponent],
  imports: [
    CommonModule,
    TypeScriptRoutingModule
  ]
})
export class TypeScriptModule { }
