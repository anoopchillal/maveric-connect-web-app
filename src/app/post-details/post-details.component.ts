import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postArray:any;

  constructor() {
    this.postArray= [
      {
        post:'Sample Post 1',
        likeCounts: '32',
        commentCounts: '3',
        postedBy: {
          firstName: 'Arun',
          middleName: 'Chandra',
          lastName: 'Vihar',
        }
      },
      {
        post:'Sample Post 2',
        likeCounts: '10',
        commentCounts: '6',
        postedBy: {
          firstName: 'John',
          middleName: 'Wick',
          lastName: 'BoogeyMan',
        }
      },
      {
        post:'Sample Post 3',
        likeCounts: '4',
        commentCounts: '3',
        postedBy: {
          firstName: 'Robert',
          middleName: 'Bruce',
          lastName: 'Banner',
        }
      }

    ];
  }


  ngOnInit(): void {
  }

}
