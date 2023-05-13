import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public validate(username:any,pass:any):Observable<any>{
    debugger
    return this.http.get<any>(`http://localhost:8080/tech/admin/loginAuth?username=${username}&pass=${pass}`);
  }
}
