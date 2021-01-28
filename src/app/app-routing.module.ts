import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesterrorComponent } from './dashboard/testerror/testerror.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { RegisterComponentComponent } from './register/register-component/register-component.component';




const routes: Routes = [
 {path:"",component:UserloginComponent},
 {path:"register",component:RegisterComponentComponent},
 {path:"userdashboard",component:UserdashboardComponent},
 {path:"dashboard",component:DashboardComponent},
 {path:"testerror",component:TesterrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
