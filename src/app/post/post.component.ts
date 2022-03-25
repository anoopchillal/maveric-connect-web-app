import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];
  postedBy:any={};
  comments:any;
  login(){
    this.common.login(this.posts).subscribe((response:any)=>{
      console.log(response)
      this.posts=response
      this.postedBy=response.postedBy;
    })

    this.common.login(this.posts).subscribe((response:any)=>{
      console.log(response)
      this.comments=response

    })
  }
  constructor(private common:CommonService ) {

   }

  ngOnInit(): void {
  }

}
