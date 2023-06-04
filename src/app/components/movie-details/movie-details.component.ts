import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';
ActivatedRoute
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  showId:string='';
  showType:string = '';
  showDetails:any;
  showVideo:any[]=[];
  showCast:any[]=[];
constructor(private _ShowService:ShowService,private _ActivatedRoute:ActivatedRoute){

_ActivatedRoute.paramMap.subscribe((params)=>{
  this.showId = params.get('id') || ''
  console.log(this.showId);
})
  _ActivatedRoute.paramMap.subscribe((params)=>{
    this.showType = params.get('media_type')!
    console.log(this.showType);
  })
  
 

}
ngOnInit():void{
 this.getDetails()
 this.getVideo()
this.getCast()
}
//getdetails
getDetails(){
  this._ShowService.getShowDetails(this.showType,this.showId).subscribe({
    next:(data)=>{
      console.log(data);
      this.showDetails = data
     
    }
  })
}
//getVideo
getVideo(){
  this._ShowService.getvideo(this.showType,this.showId).subscribe({
    next:data=>{
      
      console.log(data);
      
      data.results.forEach((element:any) => {
        if (element.type == 'Trailer') {
          this.showVideo= element.key
          console.log(this.showVideo);
        }
      });
      
    }
  })
}

//cast
getCast(){
  this._ShowService.getCast(this.showType,this.showId).subscribe({
    next:data=>{
      
      this.showCast = data.cast;
      console.log(this.showCast);
    }
  })
}
}
