
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  // Reactive form in Angular 
  // https://angular.io/guide/forms-overview 

  blogForm: FormGroup | any = '';

  topicsList: string[] = ['Art', 'Food', 'Philosophy', 'Technology', 'Travel'];
  selectedTopics: any = '';

  topicSuggestion = (query: string) => {
    console.log(query);
    return this.topicsList.filter(
      (topic) => { topic.toLowerCase().includes(query.toLowerCase()) }
    )
  };

  topicInputChange = () => {
    console.log(this.selectedTopics);
    console.log(this.blogForm.get('topics').value);
    this.selectedTopics = this.topicSuggestion(this.blogForm.get('topics').value);
  };

  selectTopic = (topic: string) => {
    console.log(topic);
    this.blogForm.get('topics').setValue(topic);
    this.selectedTopics = [];
  };

  constructor(private formBuilder: FormBuilder, private blogService: BlogDataService) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      topics: [[], Validators.required]
    });
  }

  submitBlog = () => {
    console.log(this.blogForm.value);
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      this.blogService.addNewBlog(blogData)
        .subscribe((resp) => { alert(resp); this.blogForm.reset(); });
    }
  };
}


// import { Component } from '@angular/core';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogDataService } from 'src/app/services/blog-data.service';

// @Component({
//   selector: 'app-write-blog',
//   templateUrl: './write-blog.component.html',
//   styleUrls: ['./write-blog.component.css']
// })
// export class WriteBlogComponent {

//   // template driven form in Angular 
//   // https://angular.io/guide/forms-overview 

//   blogData: Blog | any = {
//     title: '',
//     body: '',
//     userId: 1,
//   };

//   constructor(private blogService: BlogDataService) { }

//   submitBlog = () => {
//     console.log('submit');
//     this.blogService.addNewBlog(this.blogData)
//       .subscribe((resp) => { alert(resp); });
//     // }
//   };

// }



