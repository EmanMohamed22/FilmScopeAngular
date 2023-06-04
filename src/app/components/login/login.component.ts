import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _fb:FormBuilder,private _AuthServiceService:AuthServiceService,private _Router:Router){}

loginForm:FormGroup=this._fb.group({

    email: [null,[Validators.required, Validators.email ,Validators.pattern(/.com$/)]],
    password: [null,[Validators.required , Validators.minLength(6)]],
    })

get email():AbstractControl | null{
  return this.loginForm.get('email')
}
get passwrd():AbstractControl | null{
  return this.loginForm.get('password')
}


dataError:string='';
login(){
console.log(this.loginForm.value);
this._AuthServiceService.login(this.loginForm.value).subscribe({
  next:(data)=>{
   if (data.message == 'success') {
    localStorage.setItem("token",data.token);
    this._AuthServiceService.decodeData()
    this._Router.navigate(['./home'])
   }
    },
  error:(err)=>{
    this.dataError=err.error.message
    console.log(this.dataError);
    
    
  }
  
  
})
}

}
