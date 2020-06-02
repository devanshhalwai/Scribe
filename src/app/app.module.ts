import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListformComponent } from './listform/listform.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';

const firebaseConfig = {
  apiKey: "AIzaSyBbQdBhS0bb3f3XwOFU0VBVNV1zFyGazrA",
  authDomain: "scribe-devansh.firebaseapp.com",
  databaseURL: "https://scribe-devansh.firebaseio.com",
  projectId: "scribe-devansh",
  storageBucket: "scribe-devansh.appspot.com",
  messagingSenderId: "118432042776",
  appId: "1:118432042776:web:38d64d2014205d914e186d",
  measurementId: "G-VF36SDGD78"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ListformComponent,
    InterpolationComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
