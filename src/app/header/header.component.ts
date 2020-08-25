import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role:any='Admin';
  constructor(private route:Router) { }

  ngOnInit(): void {
  
  }

  getUrl() {
    return localStorage.getItem('url');
  } 
   

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('url');
    this.role='';
    this.route.navigateByUrl('attendance');

  }
}
