import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { INet } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NetsService {

  private netsUrl = 'assets/data/nets.json';
  constructor(private httpClient: HttpClient) { }
  
  getNetList() : Observable<INet[]>{
    return this.httpClient.get<INet[]>(this.netsUrl)
    .pipe(tap(data => console.log('All Nets: ', JSON.stringify(data)))); 
  }

}
