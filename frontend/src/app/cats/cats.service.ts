import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Cat from '../interfaces/cats.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>('http://localhost:3000/cats')
  }

  public remove(_id: string): Observable<Cat> {
    return this.httpClient.delete<Cat>(`http://localhost:3000/cats/${_id}`);
  }
}
