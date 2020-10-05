import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeScriptComponent } from './type-script.component';
import {TypesPageComponent} from './types-page/types-page.component';
import {InterfacesPageComponent} from './interfaces-page/interfaces-page.component';
import {FunctionsPageComponent} from './functions-page/functions-page.component';
import {ClassesPageComponent} from './classes-page/classes-page.component';
import {ModificatorsPageComponent} from './modificators-page/modificators-page.component';

const routes: Routes = [
  {
    path: '',
    component: TypeScriptComponent
  },
  {
    path: 'types',
    component: TypesPageComponent
  },
  {
    path: 'interfaces',
    component: InterfacesPageComponent
  },
  {
    path: 'function',
    component: FunctionsPageComponent
  },
  {
    path: 'classes',
    component: ClassesPageComponent
  },
  {
    path: 'modificators',
    component: ModificatorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeScriptRoutingModule { }
