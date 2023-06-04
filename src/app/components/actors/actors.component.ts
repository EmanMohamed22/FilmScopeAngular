import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  constructor(private _ShowService:ShowService){}


  trendingActors:any[]=[];
  ngOnInit():void{

  this.getTrendingActors()
}
getTrendingActors(){
  this._ShowService.getTrending(`person`).subscribe({
    next:(data)=>{
      
      this.trendingActors=data.results
      console.log(this.trendingActors);
      
    }
  })

}

}
