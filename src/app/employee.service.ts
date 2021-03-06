import { Injectable } from '@angular/core';
import { Emp} from "../app/emp"
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
  private serviceurl = 'http://localhost/api/emps'; 
     
  constructor(private http:Http) { }

  getEmployeeAsync():Observable<Emp[]>{
    return this.http.get(this.serviceurl)
    // ...and calling .json() on the response to return data
     .map((res:Response) => res.json())
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
InsertEmployee(data:Emp):Observable<any>{
  let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
 return this.http.post(this.serviceurl,body,options).map((res:Response)=>res.json())
  .catch((error:any)=>Observable.throw(error.json().error || 'Server Error'));
}
}
