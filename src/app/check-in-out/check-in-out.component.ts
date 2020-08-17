import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.scss']
})
export class CheckInOutComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      nric: ['', Validators.required],
      designation: [''],
      temperature: [''],
      location: [''],
      time: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
