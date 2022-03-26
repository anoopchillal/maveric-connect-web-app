import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postArray:any;

  constructor() {
    this.postArray= [
      {
        post:'Sample Post 1',
        likeCounts: '32',
        commentCounts: '3',
        postedBy: {
          firstName: 'Arun',
          middleName: 'C',
          lastName: 'V',
        }
      },
      {
        post:'Sample Post 2',
        likeCounts: '10',
        commentCounts: '6',
        postedBy: {
          firstName: 'Sam',
          middleName: 'K',
          lastName: 'S',
        }
      },
    ];
  }

  ngOnInit(): void {
  }

}
