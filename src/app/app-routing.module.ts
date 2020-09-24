import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'type-script',
    loadChildren: () => import('./type-script/type-script.module').then(m => m.TypeScriptModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./js/js.module').then(m => m.JsModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
