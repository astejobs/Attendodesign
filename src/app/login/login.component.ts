import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm:NgForm;
  login:any={};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.login);
  }
}
