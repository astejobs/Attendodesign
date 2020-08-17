import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.scss']
})
export class CheckInOutComponent implements OnInit {

  myForm: FormGroup;
  dateTime:any;
  constructor(public fb: FormBuilder, public datePipe: DatePipe) {
    let dt= new Date();
    //this.dateTime=this.datePipe.transform(dt,"dd-MM-yyyy HH:MM a");
    //this.myForm.get('time').patchValue(this.dateTime)
    //this.dateTime= new Date().toISOString().substring(0, 18);
    this.dateTime = new Date().toISOString().slice(0, 16);
    console.log(this.dateTime);
    this.myForm = fb.group({
      name: ['', Validators.required],
      nric: ['', Validators.required],
      designation: ['', Validators.required],
      temperature: [''],
      location: ['', Validators.required],
      time: [this.dateTime, Validators.required],
      check: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let dt= new Date();
    //this.dateTime=this.datePipe.transform(dt,"dd-MM-yyyy HH:MM a");
    //this.myForm.patchValue(this.dateTime)
    //this.dateTime= new Date().toISOString().substring(0, 18);
    //console.log(this.dateTime);
  }

  getDate(dt) {
    const format = 'dd-MM-yyyy';
    const myDate = dt.value;
    const locale = 'en-US';
    //this.tempDate = formatDate(myDate, format, locale);
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
