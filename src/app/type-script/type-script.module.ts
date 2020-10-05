import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeScriptRoutingModule } from './type-script-routing.module';
import { TypeScriptComponent } from './type-script.component';
import { TypesPageComponent } from './types-page/types-page.component';
import { InterfacesPageComponent } from './interfaces-page/interfaces-page.component';


@NgModule({
  declarations: [TypeScriptComponent, TypesPageComponent, InterfacesPageComponent],
  imports: [
    CommonModule,
    TypeScriptRoutingModule
  ]
})
export class TypeScriptModule { }
