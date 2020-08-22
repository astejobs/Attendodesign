import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseURL = 'http://localhost:8082/';
  
  constructor(private http:HttpClient) { }

  fetchAttendanceOnSearch(data){
    const url=this.baseURL+"search";
      return this.http.post(url,data,{'observe':'response'}).pipe(map((response)=>{  
      return response;
    }));
  }

  fetchReportedAttendance(search){
    const url=this.baseURL+"excel";
      return this.http.post(url,search,{'responseType':'blob' as 'json'}).pipe(map((response)=>{  
      return response;
    }));
  }
 
}
