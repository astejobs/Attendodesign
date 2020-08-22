import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";  
import { Observable } from "rxjs";   
import { CheckInOutService } from './check-in-out/check-in-out.service';
import { AttendanceService } from './attendance.service';


@Injectable()
export class LoadingService implements Resolve<any> {  
  constructor(private checkService:CheckInOutService, private att_servive: AttendanceService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {  
    return this.checkService.save('');  
  }  
  resolve1(route: ActivatedRouteSnapshot): Observable<any> {  
    return this.att_servive.fetchAttendanceOnSearch('');  
  }  

}
