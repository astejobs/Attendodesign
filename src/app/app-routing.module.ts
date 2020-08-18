import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import {  LoadingService } from './loading.service'
const routes: Routes = [
  {path: "", redirectTo:"/attendance", pathMatch:"full",
  resolve:{ attendance:LoadingService }
},
  {path: "attendance", component:CheckInOutComponent,
  resolve:{ attendance:LoadingService }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
