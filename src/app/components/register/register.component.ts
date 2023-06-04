import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private _fb:FormBuilder,private _AuthServiceService:AuthServiceService,private _Router:Router){}

  customValidation =(group:AbstractControl)=>{
    const password = group.get("password")?.value;
    const rePassword = group.get("rePassword")?.value;
    if (password !== rePassword) {
      
     group.get('rePassword')?.setErrors({ notMatch:true });
     console.log("hi");
    }
  }
registerForm:FormGroup=this._fb.group({
  name:[null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
    email: [null,[Validators.required, Validators.email ,Validators.pattern(/.com$/)]],
    password: [null,[Validators.required , Validators.minLength(6)]],
    rePassword: [null,[Validators.required]],
    phone: [null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
},
{validators:this.customValidation})
get fname():AbstractControl | null{
  return this.registerForm.get('name')
}
get email():AbstractControl | null{
  return this.registerForm.get('email')
}
get passwrd():AbstractControl | null{
  return this.registerForm.get('password')
}
get rePassword():AbstractControl | null{
  return this.registerForm.get('rePassword')
}
get phone():AbstractControl | null{
  return this.registerForm.get('phone')
}


dataError:string='';
register(){
console.log(this.registerForm.value);
this._AuthServiceService.register(this.registerForm.value).subscribe({
  next:(data)=>{
   if (data.message == 'success') {
    this._Router.navigate(['./login'])
   }
    },
  error:(err)=>{
    this.dataError=err.error.message
    console.log(this.dataError);
    
    
  }
  
  
})
}

}
