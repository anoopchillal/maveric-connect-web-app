import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: any = {};

  register() {
    this.signup = {
      name: this.signup.name,
      email: this.signup.email,
      password: this.signup.password,
    };
    console.log(this.signup);
    this.common.signup(this.signup).subscribe((response: any) => {
      console.log(response);
    });

  }
  constructor(private common: CommonService,) { }

  ngOnInit(): void {
  }

}
