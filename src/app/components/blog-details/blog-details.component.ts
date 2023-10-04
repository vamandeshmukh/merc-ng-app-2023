import { Component } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { Blog } from 'src/app/models/blog.model';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {

  blogId: number = 22;
  blogData: Blog | any = '';

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.blogDataService.getBlogById(this.blogId)
      .subscribe(
        (resp) => {
        console.log(resp);
        this.blogData = resp;
      });
  }
}


// import { Component } from '@angular/core';
// import { BlogDataService } from 'src/app/services/blog-data.service';
// import { Blog } from 'src/app/models/blog.model';


// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent {

//   blogId: number = 222;
//   blogData: Blog | any = '';

//   constructor(private blogDataService: BlogDataService) { }

//   ngOnInit() {
//     this.blogDataService.getBlogById(this.blogId)
//       .subscribe((resp) => {
//         console.log(resp);
//         this.blogData = resp;
//       });
//   }
// }



