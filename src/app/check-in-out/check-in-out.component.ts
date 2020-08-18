import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CheckInOutService } from './check-in-out.service'
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
  constructor(private checkService:CheckInOutService,public datePipe: DatePipe) {    
  }

  ngOnInit(): void {
    this.attendance.appUser = {};
    let bindDate = this.datePipe.transform(this.dateTime, 'dd-MM-yyyy hh:mm'); console.log(bindDate)
    this.attendance.time=bindDate;
  }

  onSubmit() {
   if(this.attendance.check="checkIn"){
     this.attendance.checkInTime=this.attendance.time;
   }else{
    this.attendance.checkOutTime=this.attendance.time;
   }
    this.checkService.save(this.attendance).subscribe((data:any)=>{
      this.ngOnInit();
    });
  }

} 
