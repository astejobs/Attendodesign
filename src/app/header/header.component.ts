import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role:any='Admin';
  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    return localStorage.getItem('url');
  } 
}
