import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeScriptRoutingModule } from './type-script-routing.module';
import { TypeScriptComponent } from './type-script.component';
import { TypesPageComponent } from './types-page/types-page.component';
import { InterfacesPageComponent } from './interfaces-page/interfaces-page.component';
import { FunctionsPageComponent } from './functions-page/functions-page.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { ModificatorsPageComponent } from './modificators-page/modificators-page.component';
import { ExtendsPageComponent } from './extends-page/extends-page.component';
import { GenericsPageComponent } from './generics-page/generics-page.component';


@NgModule({
  declarations: [
    TypeScriptComponent,
    TypesPageComponent,
    InterfacesPageComponent,
    FunctionsPageComponent,
    ClassesPageComponent,
    ModificatorsPageComponent,
    ExtendsPageComponent,
    GenericsPageComponent],
  imports: [
    CommonModule,
    TypeScriptRoutingModule
  ]
})
export class TypeScriptModule { }
