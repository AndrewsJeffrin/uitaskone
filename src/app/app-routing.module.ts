import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { RegisterComponentComponent } from './register/register-component/register-component.component';




const routes: Routes = [
 {path:"",component:UserloginComponent},
 {path:"register",component:RegisterComponentComponent},
 {path:"userdashboard",component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
