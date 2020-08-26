import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm:NgForm;
  user:any={};
  errorLbl:string;

  constructor(private myService:LoginService,private route:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    localStorage.setItem('url','login');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
 
  }
  onSubmit() {
    this.spinner.show();
    this.myService.login(this.user).subscribe((response:any)=>{
    // console.log(response.body);
     //console.log(response.status);
     if(response.status==200){

        if(response.body['role']=="Admin")  {
          localStorage.setItem('token',response.body['token']);
          localStorage.setItem('role',response.body['role']);
          localStorage.setItem('user',this.user.username);        
          this.route.navigateByUrl('search');  
          this.spinner.hide();       
        }
      }
      else {   
          this.spinner.hide();  
          Swal.fire('oops', 'Wrong Credentials', 'error');
        }
      
      },
      (err:any)=>{
        this.spinner.hide();
        Swal.fire('oops', 'Wrong Credentials', 'error');
    
    });
    this.spinner.hide();
  }
      
}
