import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";  
import { Observable } from "rxjs";   
import { CheckInOutService } from './check-in-out/check-in-out.service';


@Injectable()
export class LoadingService implements Resolve<any> {  
  constructor(private checkService:CheckInOutService) {}  
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {  
    return this.checkService.save('');  
  }  

}
