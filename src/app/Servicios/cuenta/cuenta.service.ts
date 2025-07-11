import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private apiuser = 'http://localhost:8080/api/users';

  constructor(private http:HttpClient) { }

  onLogin(obj:any): Observable<any> {
    return this.http.post(this.apiuser+"/login",obj);
  }
  onRegis(obj:Registro): Observable<Registro>{
    return this.http.post<Registro>(this.apiuser+"/register",obj);
  }
}
 