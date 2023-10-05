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

  constructor(private formBuilder: FormBuilder, private blogService: BlogDataService) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  submitBlog = () => {
    console.log('submit');
    // if (this.blogForm.valid) {
    const blogData = this.blogForm.value;
    this.blogService.addNewBlog(blogData)
      .subscribe((resp) => { alert(resp); });
    // }
  };



}
