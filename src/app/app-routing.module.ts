import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {path: '', component: BlogListComponent},
  {path: 'blog', component: BlogListComponent},
  {path: 'blog/create', component: BlogFormComponent},
  {path: 'blog/edit/:id', component: BlogFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
