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
  dateTime:any;
  constructor(public datePipe: DatePipe) {
    let dt= new Date();
    this.dateTime = new Date().toISOString().slice(0, 16);
    console.log(this.dateTime);    
  }

  ngOnInit(): void {
    this.attendance.appUser = {};
    this.attendance.time=this.dateTime;
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
