import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule          

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
