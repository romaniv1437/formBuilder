import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerURL = 'http://localhost:5000/api/auth/register'
  private _loginURL = 'http://localhost:5000/api/auth/login'

  constructor(private http: HttpClient) { }

  registerUser(user:any) {
    return this.http.post<any>(this._registerURL, user)
  }
  loginUser(user:any) {
    return this.http.post<any>(this._loginURL, user)
  }
}
