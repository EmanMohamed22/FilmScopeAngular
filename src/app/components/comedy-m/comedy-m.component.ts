import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-comedy-m',
  templateUrl: './comedy-m.component.html',
  styleUrls: ['./comedy-m.component.css']
})
export class ComedyMComponent {
  constructor(private _ShowService:ShowService){}

  comedyMovies:any[]=[];
 
  ngOnInit():void{

  this.getComedyMovies();
 
}


//ComedyMovies
getComedyMovies(){
  this._ShowService.getMoviesType(35).subscribe({
    next:(data)=>{
      console.log(data);
      
      this.comedyMovies=data.results
    
      
    }
  })
}
}
