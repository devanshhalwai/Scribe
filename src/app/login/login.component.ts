import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string = '';
  userError: any;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(form) {
    this.message = '';
    this.userError = null;
    let email = form.value.email;
    let password = form.value.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
        this.message = 'You have been Logged in Successfully.';
      })
      .catch((error) => {
        this.userError = error;
        console.log(error);
      });
  }
}
