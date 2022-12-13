import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'create', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
