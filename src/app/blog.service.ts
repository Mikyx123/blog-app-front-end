import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Blog } from "./interfaces/blog"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL : string = 'http://localhost:3000';

  constructor( private http : HttpClient) { }

  getBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.BASE_URL}/blog`);
  }

  getBlog(id : number):Observable<Blog>{
    return this.http.get<Blog>(`${this.BASE_URL}/blog/${id}`);
  }

  createBlog(blog : Blog):Observable<Blog>{
    return this.http.post<Blog>(`${this.BASE_URL}/blog/create`, blog);
  }

  deleteBlog(id : number):Observable<Blog>{
    return this.http.delete<Blog>(`${this.BASE_URL}/blog/${id}`)
  }

  updateBlog(id:number, blog: Blog):Observable<Blog>{
    return this.http.put<Blog>(`${this.BASE_URL}/blog/${id}`, blog)
  }

}
