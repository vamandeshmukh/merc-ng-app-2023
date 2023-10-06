import { Component } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';
import { Blog } from 'src/app/models/blog.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
  // ,
  // providers: [BlogDataService, CommentService]
})
export class BlogDetailsComponent {

  blogId: number | any = '';
  blogData: Blog | any = '';
  blogNotAvailable: any = '';

  constructor(private actRoute: ActivatedRoute, private blogDataService: BlogDataService) {
    // blogDataService = new BlogDataService(); // not needed 
  }

  // const obj = new BlogDataService(); // not needed 

  ngOnInit() {
    this.blogId = this.actRoute.snapshot.paramMap.get('id');
    // this.blogId = 101
    console.log(this.blogId);
    this.blogDataService.getBlogById(this.blogId)
      .subscribe(
        {
          next: (resp) => {
            this.blogData = resp;
            console.log(resp);
          },
          error: (err) => {
            console.error(err);
            if (err.status === 404)
              this.blogNotAvailable = `Sorry! Blog with the id ${this.blogId} is not found.`;
          },
          complete: () => {
            console.info('complete');
          }
        }
      );



  }

}


// add comments to this blog post 
// comments component 
// comment model interface 
// comment service 

// import { Component } from '@angular/core';
// import { BlogDataService } from 'src/app/services/blog-data.service';
// import { Blog } from 'src/app/models/blog.model';
// import { ActivatedRoute, ParamMap } from '@angular/router';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent {

//   blogId: number | any = '';
//   blogData: Blog | any = '';

//   constructor(private actRoute: ActivatedRoute, private blogDataService: BlogDataService) { }

//   ngOnInit() {
//     this.blogId = this.actRoute.snapshot.paramMap.get('id');
//     this.blogDataService.getBlogById(this.blogId)
//       .subscribe(
//         (resp) => {
//           console.log(resp);
//           this.blogData = resp;
//         });
//   }
// }



// import { Component } from '@angular/core';
// import { BlogDataService } from 'src/app/services/blog-data.service';
// import { Blog } from 'src/app/models/blog.model';


// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent {

//   blogId: number | any = '';
//   blogData: Blog | any = '';

//   constructor(private blogDataService: BlogDataService) { }

//   ngOnInit() {
//     this.blogId = 22;
//     this.blogDataService.getBlogById(this.blogId)
//       .subscribe(
//         (resp) => {
//           console.log(resp);
//           this.blogData = resp;
//         });
//   }
// }


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




