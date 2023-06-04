import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
ShowService
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private _ShowService:ShowService){}


  documentMovies:any[]=[]
  actionMovies:any[]=[];
  comedyMovies:any[]=[];
  ngOnInit():void{

  
  // this.getActionMovies();
  // this.getComedyMovies()
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

//comedyMovies
getComedyMovies(){
  this._ShowService.getMoviesType(35).subscribe({
    next:(data)=>{
      
      this.comedyMovies=data.results
     
    }
  })
}
//documentaryMovies
getDocumentMovies(){
  this._ShowService.getMoviesType(99).subscribe({
    next:(data)=>{
      
      this.documentMovies=data.results
   
      
    }
  })
}
  
}
