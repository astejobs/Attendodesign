import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';

const routes: Routes = [
  {path: "", redirectTo:"/checkout", pathMatch:"full"},
  {path: "checkout", component:CheckInOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
