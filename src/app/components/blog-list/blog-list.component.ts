import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  allBlogs: any;

  constructor(private blogService: BlogDataService) { };

  ngOnInit(): void {
    this.blogService.getAllBlogs()
      .subscribe((resp) => {
        console.log(resp);
        this.allBlogs = resp;
      });
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog-list',
//   templateUrl: './blog-list.component.html',
//   styleUrls: ['./blog-list.component.css']
// })
// export class BlogListComponent implements OnInit {

//   blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';
//   allBlogs: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get(this.blogUrl)
//       .subscribe((resp) => {
//         console.log(resp);
//         this.allBlogs = resp;
//       });
//   }
// }



// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-blog-list',
//   templateUrl: './blog-list.component.html',
//   styleUrls: ['./blog-list.component.css']
// })
// export class BlogListComponent {

//   blogUrl: string = 'https://jsonplaceholder.typicode.com/posts';
//   allBlogs: any;

//   constructor(private http: HttpClient) { }

//   getAllBlogs = () => {
//     this.http.get(this.blogUrl)
//       .subscribe((resp) => {
//         console.log(resp);
//         this.allBlogs = resp;
//       });
//   };
// }
