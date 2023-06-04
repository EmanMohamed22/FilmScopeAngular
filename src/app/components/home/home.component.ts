import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShowService } from 'src/app/services/show.service';

 // @ts-ignore
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private _ShowService:ShowService){}
value='';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,


    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 8
      }
    },
    
  }

   ngOnInit(): void {
    
    this.getTrending()
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 200,
      deleteSpeed: 200,
      typeColor: 'red'
    })
    
    writer
      .type('Watch the latest Movies')
      .rest(500)
      .changeOps({ deleteSpeed: 200 })
      .remove(6)
      .type('TV Shows ')
      .rest(500)
      .remove(9)
      .type('artwork of the actor')
      .rest(500)
      .changeOps({ deleteSpeed: 200 })
      .remove(21)
      
      .clear()
      .start()



          
   }
   
   trendingAll:any[]=[];
   trendingTv:any[]=[];
   trendingActors:any[]=[];

  
  getTrending(){
    this._ShowService.getTrending(`all`).subscribe({
      next:(data)=>{
        
        this.trendingAll=data.results
        console.log(this.trendingAll);
        
      }
    })
  }
  
}
