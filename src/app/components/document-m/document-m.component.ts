import { Component } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-document-m',
  templateUrl: './document-m.component.html',
  styleUrls: ['./document-m.component.css']
})
export class DocumentMComponent {
  constructor(private _ShowService:ShowService){}

  documentMovies:any[]=[];
 
  ngOnInit():void{

  this.getDocumentMovies();
 
}


//documentMovies
getDocumentMovies(){
  this._ShowService.getMoviesType(53).subscribe({
    next:(data)=>{
      console.log(data);
      
      this.documentMovies=data.results
      console.log(this.documentMovies);
      
    
      
    }
  })
}
}
