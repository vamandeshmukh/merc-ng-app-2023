import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-blogs', component: BlogListComponent },
  // { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // more routes 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
