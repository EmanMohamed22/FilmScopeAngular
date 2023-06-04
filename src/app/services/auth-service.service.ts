import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from "./../interfaces/register-form";
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginForm } from '../interfaces/login-form';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _httpClient:HttpClient,private _Router:Router) { 
    if (localStorage.getItem('token') != null) {
      this.decodeData()
    }
  }

  register(registerForm:RegisterForm):Observable<any>{
return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', registerForm)
  }

  login(loginForm:LoginForm):Observable<any>{
return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', loginForm)
  }

  userToken= new BehaviorSubject(null);

  decodeData(){
    let encodedData =JSON.stringify (localStorage.getItem('token'))
    let decodedData:any = jwtDecode(encodedData);
    this.userToken.next (decodedData)
    console.log(this.userToken);
    
  }
  logout(){
    localStorage.removeItem("token");
    this.userToken.next(null)
    this._Router.navigate(['/login'])
  }
}
