import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PostComponent } from './post/post.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'create', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
