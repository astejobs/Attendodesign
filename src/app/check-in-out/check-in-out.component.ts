import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  constructor(public datePipe: DatePipe) {    
  }

  ngOnInit(): void {
    this.attendance.appUser = {};
    let bindDate = this.datePipe.transform(this.dateTime, 'dd-MM-yyyy hh:mm a'); console.log(bindDate)
    this.attendance.time=bindDate;
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
