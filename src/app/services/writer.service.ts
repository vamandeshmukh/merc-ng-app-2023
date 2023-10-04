import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  writerUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getWriterById = (writerId: number): Observable<any> => {
    console.log(writerId);
    return this.http.get<any>(`${this.writerUrl}/${writerId}`);
  };

}
