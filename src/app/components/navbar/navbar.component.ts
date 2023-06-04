import { Component, HostListener, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'#scrolllength');
    
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg ={
        'background-color':'#000000',
        
      }
    } else {
      this.navbg ={
      
      }    }
  }
islogin:boolean =false;
value='';
constructor(public _AuthServiceService:AuthServiceService){

}
ngOnInit(): void {
  this._AuthServiceService.userToken.subscribe({
    next:()=>{
       if (this._AuthServiceService.userToken.getValue() !== null) {
        this.islogin = true
        console.log(this._AuthServiceService.userToken);
        
       } else {
        this.islogin = false
       }
    }
  })
}
logout(){
  this._AuthServiceService.logout()
}
}

