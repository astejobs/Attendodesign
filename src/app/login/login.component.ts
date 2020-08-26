import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm:NgForm;
  user:any={};
  errorLbl:string;

  constructor(private myService:LoginService,private route:Router) { }

  ngOnInit(): void {
    localStorage.setItem('url','login');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
 
  }
  onSubmit() {
    try {
        this.myService.login(this.user).subscribe((response:any)=>{
        
          if(response.body!=null){

            if(response.body['role']=="Admin")  {
              localStorage.setItem('token',response.body['token']);
              localStorage.setItem('role',response.body['role']);
              localStorage.setItem('user',this.user.username);        
              this.route.navigateByUrl('search');         
            }
          }
          else {   
              console.log('else executed');   
              Swal.fire('oops', 'Wrong Credentials', 'error');
            }
        
        }); 
    } catch(err) {
        console.log('error' + err);
        Swal.fire('oops', 'Wrong Credentials', 'error');
      }
  }
      
}
