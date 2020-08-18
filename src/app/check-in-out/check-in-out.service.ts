import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckInOutService {

  constructor(private http:HttpClient) { }
  BASE_URL = "http://localhost:8082/";


 save(data){
   const url = this.BASE_URL+"attendance"
   return this.http.post(url,data,{'observe':'response'}).pipe(map(response=>{
          return response;
    }));      
}

}
