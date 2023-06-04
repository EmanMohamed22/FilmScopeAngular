import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private _ShowService:ShowService){}


  trendingTV:any[]=[];
  ngOnInit():void{

  this.getTrendingTV()
}
getTrendingTV(){
  this._ShowService.getTrending(`tv`).subscribe({
    next:(data)=>{
      
      this.trendingTV=data.results
      console.log(this.trendingTV);
      
    }
  })

}

}