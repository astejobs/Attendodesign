import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from './loading.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckInOutComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule         

  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DatePipe,LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
