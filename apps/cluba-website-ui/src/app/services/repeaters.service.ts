import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { IRepeater } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RepeatersService {

  private repeaterUrl = 'api/repeaters.json';
  constructor(private httpClient: HttpClient) { }
  
  getRepeaterList() : Observable<IRepeater[]>{
    return this.httpClient.get<IRepeater[]>(this.repeaterUrl)
    .pipe(tap(data => console.log('All Repeaters: ', JSON.stringify(data)))); 
  }

  getRepeater(id: number) : Observable<IRepeater[]> {
     
    return this.httpClient.get<IRepeater[]>(this.repeaterUrl).pipe(
      map(repeaters => {
        return repeaters.filter(i => i.id == id);
      }));

  }

}
