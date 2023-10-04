import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListclsComponent } from './blog-listcls.component';

describe('BlogListclsComponent', () => {
  let component: BlogListclsComponent;
  let fixture: ComponentFixture<BlogListclsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListclsComponent]
    });
    fixture = TestBed.createComponent(BlogListclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
