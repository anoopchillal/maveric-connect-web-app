import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any ={ }
  constructor(private common: CommonService, private router:Router) { }

  login(){
    this.common.login(this.user).subscribe((response:any)=>{
    console.log("response from api" , response)
    if (response.token){
      localStorage["token"] =response.token
      this.router.navigate(["/"])
    }
    else{
      alert("Invalid credentials!")
    }
    })
 }
  ngOnInit(): void {
  }

}
