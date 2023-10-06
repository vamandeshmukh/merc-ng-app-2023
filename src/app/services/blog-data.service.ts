import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, take, throwError } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  private expoBackOff = (retry: number, delayInMs: number) => {
    return (errors: Observable<any>) => {
      return errors.pipe(
        delay(delayInMs),
        take(retry)
        // ,
        // catchError((err) => { throwError(err) })
      );
    };
  };

  getAllBlogs = (): Observable<Blog[]> => {
    return this.http.get<Blog[]>(this.blogUrl);
  };

  getBlogById(blogId: number): Observable<Blog> {
    console.log(blogId);
    return this.http.get<Blog>(`${this.blogUrl}/${blogId}`);
    // return this.http.get<Blog>(`${this.blogUrl}/${blogId}`)
    //   .pipe(
    //     retryWhen(this.expoBackOff(3, 2000)),
    //     catchError((err) => {
    //       return throwError(err)
    //     })
    //   )

  }

  // getBlogByTitle = (title: string) => { };
  // addnewBlog = (newBlog: Blog) => { };

  addNewBlog = (newBlog: Blog): Observable<Blog> => {
    console.log(newBlog);
    return this.http.post<Blog>(this.blogUrl, newBlog);
  };

}










function retryWhen(arg0: (errors: Observable<any>) => Observable<any>): import("rxjs").OperatorFunction<Blog, Blog> {
  throw new Error('Function not implemented.');
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Blog } from 'src/app/models/blog.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BlogDataService {  

//   blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';

//   constructor(private http: HttpClient) { }

//   getAllBlogs = (): Observable<Blog[]> => {
//     return this.http.get<Blog[]>(this.blogUrl);
//   };

//   getBlogById(blogId: number): Observable<Blog> {
//     console.log(blogId);
//     return this.http.get<Blog>(`${this.blogUrl}/${blogId}`);
//   }

//   // getBlogByTitle = (title: string) => { };
//   // addnewBlog = (newBlog: Blog) => { };

//   addNewBlog = (newBlog: Blog): Observable<Blog> => {
//     console.log(newBlog);
//     return this.http.post<Blog>(this.blogUrl, newBlog);
//   };

// }









