import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(trendingAll:any[],term:string): any[] {
    return trendingAll.filter(trend=>trend.original_title?.toLowerCase().includes(term.toLowerCase()));
  }

}
