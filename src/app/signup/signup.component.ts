import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = ''
  password = ''
  invalidLogin = false

  @Input() error: string | null | undefined;
  constructor(private router: Router,
    private signupservice: AuthenticationService,) { }

  ngOnInit(): void {
  }

  checkSignup() {
    (this.signupservice.authenticate(this.email, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }

}
