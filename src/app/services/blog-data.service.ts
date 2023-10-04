import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllBlogs = (): Observable<any[]> => {
    console.log('getAllBlogs');
    return this.http.get<any[]>(this.blogUrl);
  };

  // getBlogById = (id: number) => { };

  // addnewBlog = () => { };

}
