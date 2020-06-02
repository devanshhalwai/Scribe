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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string = '';
  userError: any;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email,Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', [Validators.required]],
      },
      {
        validator: this.checkIfMatchingPasswords('password', 'confirmpassword'),
      }
    );
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true,
        });
      }
    };
  }

  onSubmit(signupform) {
    this.message = "";
    this.userError =null;
    let email = signupform.value.email;
    let password = signupform.value.password;
    let firstName = signupform.value.firstName;
    let lastName = signupform.value.lastName;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        let randomnumber = Math.floor(Math.random() * 1000);
        response.user
          .updateProfile({
            displayName: firstName + lastName,
            photoURL: 'https://api.adorable.io/avatars/' + randomnumber,
          })
          .then(() => {
            this.message = 'You have been Signed Up Successfully. Please Login';
          })
      })
      .catch((error) => {
        this.userError = error;
        console.log(error);
      });
  }

  ngOnInit(): void {}
}
