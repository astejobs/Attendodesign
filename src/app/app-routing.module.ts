import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import {  LoadingService } from './loading.service'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", redirectTo:"/attendance", pathMatch:"full",
  resolve:{ attendance:LoadingService }
},
  {path: "login", component:LoginComponent},
  {path: "attendance", component:CheckInOutComponent},
  {path: "search", component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
