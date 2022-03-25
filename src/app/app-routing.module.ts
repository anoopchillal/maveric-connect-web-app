import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'', component:SignupComponent},
  {path:'posts' , component:PostComponent},
  {path: 'posts-details', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
