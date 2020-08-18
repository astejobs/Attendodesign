import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';

const routes: Routes = [
  {path: "", redirectTo:"/attendance", pathMatch:"full"},
  {path: "attendance", component:CheckInOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
