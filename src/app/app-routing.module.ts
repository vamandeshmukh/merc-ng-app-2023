import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-blogs', component: BlogListComponent },
  // { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: 'write-blog', component: WriteBlogComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'write-blog', component: WriteBlogComponent, canActivate: [localStorage.getItem('loggedInUser')] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component }
  // more routes 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
