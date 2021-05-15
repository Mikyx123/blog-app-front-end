import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs : Blog[] = [];

  constructor(private blogService : BlogService) { }

  ngOnInit(){
    this.getBlogs();
    console.log(this.getBlogs())
  }

  getBlogs(){
    this.blogService.getBlogs()
      .subscribe(
        res => {
          this.blogs = res
        },
        err => console.log(err)
      )
  }

  deleteBlog(id: number){
    this.blogService.deleteBlog(id)
      .subscribe(
        res => {
          this.getBlogs();
        },
        err => console.log(err)
      )
  }

}
