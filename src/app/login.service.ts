import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:8082/';
  
  constructor(private http:HttpClient) { }

  login(data){
    const url=this.baseURL+"authenticate";
    return this.http.post(url,data,{'observe':'response'}).pipe(map((response)=>{  
    
    return response;
  }));


 }
}
