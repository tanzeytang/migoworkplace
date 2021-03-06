import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginRoutingModule} from './login/login-routing.module';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
