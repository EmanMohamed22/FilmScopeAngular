import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ShowService {
baseUrl='https://api.themoviedb.org/3/';
apiKey ='api_key=d6cab8aa0612363e1298ba9ed033d880';

  constructor(private _HttpClient:HttpClient) { }
  //getbanner//
getBannar():Observable<any>{
  return this._HttpClient.get(this.baseUrl+'/trending/all/week?'+this.apiKey)
}
//gettrending//
 getTrending(mediaType:string):Observable<any>{
 return this._HttpClient.get(this.baseUrl+`trending/${mediaType}/week?`+ this.apiKey)
}

//getdetails//
getShowDetails(mediaType:string,id:any):Observable<any>{
  return this._HttpClient.get(this.baseUrl+`${mediaType}/${id}?`+ this.apiKey+'&language=en-US')
}

//getvideo//
getvideo(mediaType:string,id:any):Observable<any>{
return this._HttpClient.get(this.baseUrl+`${mediaType}/${id}/videos?`+ this.apiKey)
}
//cast
getCast(mediaType:string,id:any):Observable<any>{
return this._HttpClient.get(this.baseUrl+`${mediaType}/${id}/credits?`+ this.apiKey)
}
//moviesType

getMoviesType(type:number):Observable<any>{
  return this._HttpClient.get(this.baseUrl+'/discover/movie?'+this.apiKey+`&with_genres=${type}`)
}
}
