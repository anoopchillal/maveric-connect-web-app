import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }

  getPosts(){
    let url= "http://localhost:8000/posts"
    return this.http.get(url)
  }
  signup(body:any){
    let url = "http://localhost:8000/users/"
    return this.http.get(url)
  }
  login(body:any){
    let url = "http://localhost:8000/users/"
    return this.http.get(url)
  }
}
