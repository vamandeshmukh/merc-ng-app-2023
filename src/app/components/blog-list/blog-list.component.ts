import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {

  blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  allBlogs: any;

  constructor(private http: HttpClient) { }

  getAllBlogs = () => {
    this.http.get(this.blogUrl)
      .subscribe((resp) => {
        console.log(resp);
        this.allBlogs = resp;
      });
  };
}
