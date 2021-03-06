import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CheckInOutService } from './check-in-out.service'
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.scss']
})
export class CheckInOutComponent implements OnInit {

  @ViewChild('myForm') myForm:NgForm;
  attendance:any={};
  appUser:any={}
  dateTime=new Date();
  constructor(private checkService:CheckInOutService,public datePipe: DatePipe,
              private spinner: NgxSpinnerService) {    
  }

  ngOnInit(): void {
    localStorage.setItem('url','attendance');
    this.attendance.appUser = {};
    let bindDate = this.datePipe.transform(this.dateTime, 'dd-MM-yyyy hh:mm a'); console.log(bindDate)
    this.attendance.time=bindDate;
  }
 
  onSubmit() {
   this.spinner.show();
   this.attendance.date = this.attendance.time.slice(0,10);

   if(this.attendance.check=="checkIn"){
     this.attendance.checkInTime=this.attendance.time.slice(10);
   }else{
    this.attendance.checkOutTime=this.attendance.time.slice(10);
   }
   
    this.checkService.save(this.attendance).subscribe((data:any)=>{
      if(data.status==200){
        this.spinner.hide();
        Swal.fire('Thank You', 'Data Saved Successfully!', 'success')
      }
      else {
        this.spinner.hide();
        Swal.fire('Oops...', 'Something went wrong!', 'error')
      }
      this.spinner.hide();
      this.ngOnInit();
    });
  }

} 
