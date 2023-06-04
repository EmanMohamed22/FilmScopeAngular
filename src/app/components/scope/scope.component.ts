import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit{
constructor(private _ShowService:ShowService){}

bannerData:any[]=[];
  ngOnInit(): void {
    this.bannarDatafn()
  }


bannarDatafn(){
  this._ShowService.getBannar().subscribe({
    next:res=>{
      this.bannerData=res.results
      console.log(this.bannerData);
      
      
    }
  })
}
}
