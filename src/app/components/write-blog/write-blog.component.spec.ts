import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogDataService } from 'src/app/services/blog-data.service';

import { WriteBlogComponent } from './write-blog.component';

describe('WriteBlogComponent', () => {
  let component: WriteBlogComponent;
  let fixture: ComponentFixture<WriteBlogComponent>;
  let blogService: BlogDataService;
  let submitButton: HTMLButtonElement;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [WriteBlogComponent]
  //   });
  //   fixture = TestBed.createComponent(WriteBlogComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBlogComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogDataService);
    fixture.detectChanges();
    submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with title and body fields', () => {
    const form = fixture.nativeElement.querySelector('form');
    console.log(form);
    expect(form).toBeTruthy();

    const titleInput = fixture.nativeElement.querySelector('input[name="title"]');
    expect(titleInput).toBeTruthy();

    const bodyInput = fixture.nativeElement.querySelector('textarea[name="body"]');
    expect(bodyInput).toBeTruthy();
  });

  // it('should submit a new blog post when the form is valid', () => {
  //   const blogData = { title: 'Test Title', body: 'Test Body' };
  //   const submitSpy = spyOn(blogService, 'createBlogPost').and.returnValue(of(blogData));

  //   component.blogForm.setValue(blogData);
  //   fixture.detectChanges();

  //   submitButton.click();
  //   fixture.detectChanges();

  //   expect(submitSpy).toHaveBeenCalledWith(blogData);
  //   // Add more expectations based on your application's behavior after a successful submission
  // });
});
