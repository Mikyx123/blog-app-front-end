import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../interfaces/blog';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blog: Blog = {
    id : 0,
    title: '',
    description: '',
    imageURL: ''
  };

  edit: boolean = false;

  constructor(
    private blogService : BlogService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if(params){
      this.blogService.getBlog(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.blog = res;
            this.edit = true;
          }
        )
    }
  }

  submitBlog(){
    this.blogService.createBlog(this.blog)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/'])
        },
        err => console.log(err)
      )
  }

  updateBlog(){
    this.blogService.updateBlog(this.blog.id, this.blog)
      .subscribe(
        res => {console.log(res) ;
        this.router.navigate(['/'])
        },
        err => console.log(err)
      )
  }

}
