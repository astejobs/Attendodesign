import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseURL = 'https://ifarms.com.sg:8085/DailyTemperatureApp/';
  
  constructor(private http:HttpClient) { }

  fetchAttendanceOnSearch(data){
    const url=this.baseURL+"temperatures";
      return this.http.post(url,data,{'observe':'response'}).pipe(map((response)=>{  
      return response;
    }));
  }

  fetchReportedAttendance(search){
    const url=this.baseURL+"reportedEmployees";
      return this.http.post(url,search,{'responseType':'blob' as 'json'}).pipe(map((response)=>{  
      return response;
    }));
  }
 
}
