import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllBlogs = (): Observable<Blog[]> => {
    return this.http.get<Blog[]>(this.blogUrl);
  };

  getBlogById(blogId: number): Observable<Blog> {
    console.log(blogId);
    return this.http.get<Blog>(`${this.blogUrl}/${blogId}`);
  }

  // getBlogByTitle = (title: string) => { };
  // addnewBlog = (newBlog: Blog) => { };

  addNewBlog = (newBlog: Blog): Observable<Blog> => {
    console.log(newBlog);
    return this.http.post<Blog>(this.blogUrl, newBlog);
  };

}








