import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];

  constructor(private common:CommonService) {
    this.common.getPosts().subscribe((response:any) =>{
      console.log("Response from all Posts api", response)
      this.posts = response.data
    },(error)=>{
      console.log("Error from all Posts api", error)
    })
   }

  ngOnInit(): void {
  }

}
