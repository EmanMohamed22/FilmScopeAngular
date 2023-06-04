import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-action-m',
  templateUrl: './action-m.component.html',
  styleUrls: ['./action-m.component.css']
})
export class ActionMComponent {
  constructor(private _ShowService:ShowService){}

  actionMovies:any[]=[];
 
  ngOnInit():void{

  this.getActionMovies();
 
}


//actionMovies
getActionMovies(){
  this._ShowService.getMoviesType(28).subscribe({
    next:(data)=>{
      console.log(data);
      
      this.actionMovies=data.results
      console.log(this.actionMovies);
      
    }
  })
}
}
