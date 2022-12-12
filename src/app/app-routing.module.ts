import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'create', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
