import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {IUser} from "../../assets/models/IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';
  private _registerURL = 'http://localhost:5000/api/auth/register';
  private _loginURL = 'http://localhost:5000/api/auth/login';


  constructor(private http: HttpClient) { }

  registerUser(user:IUser) {
    return this.http.post<any>(this._registerURL, user).pipe(
      tap(({access_token}) => {
        localStorage.setItem('access_token', access_token);
        this.setToken(access_token)
      })
    )
  }
  loginUser(user:IUser) {
    return this.http.post<any>(this._loginURL, user).pipe(
      tap(({access_token}) => {
        localStorage.setItem('access_token', access_token);
        this.setToken(access_token)
      })
    )
  }

  setToken(token: string) {
    this.token = token;
  }
  getToken():string {
    return this.token;
  }
  isAuth():boolean {
    return !!this.token;
  }
  logout() {
    this.setToken('');
    localStorage.clear()
  }
}
