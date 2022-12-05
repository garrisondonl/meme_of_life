import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  lognForm: FormGroup;

  correctUName = 'Donald';
  correctPassword = 'Garrison';
  correctManager = true;

  constructor(
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.lognForm = new FormGroup({
      uname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
   }

  //onLogn() {

    //const currentUName = new User(this.correctUName, this.correctPassword, this.correctManager)

    //if ((this.lognForm.get('uname').value === currentUName.user) && (this.lognForm.get('password').value === currentUName.password)) {
      //if (this.correctManager){
        //this.router.navigateByUrl('/manager');
      //} else {
        //this.router.navigateByUrl('/pantry');
      //}
    //}
  //}
}
