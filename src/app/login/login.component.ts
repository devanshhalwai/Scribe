import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message: string = '';
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {
    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    this.message = '';
    this.userError = null;
    let email = form.value.email;
    let password = form.value.password;
    this.authService
      .login(email, password)
      .then((data) => {
        console.log(data);
        this.message = 'You have been Logged in Successfully.';
        this.router.navigate(['/myblogs']);
      })
      .catch((error) => {
        this.userError = error;
        console.log(error);
      });
  }
}
