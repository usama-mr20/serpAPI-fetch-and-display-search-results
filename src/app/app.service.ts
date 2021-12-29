import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from './IResult';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getResult(query: string): Observable<IResult[]> {
    return this.http.get<IResult[]>(`http://localhost:3100/search/${query}`);
  }
}
