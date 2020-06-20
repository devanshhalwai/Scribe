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
import { firebaseConfig } from './firebaseConfig.js';
import { CapitalizePipe } from './capitalize.pipe';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';


firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ListformComponent,
    InterpolationComponent,
    SignupComponent,
    LoginComponent,
    CapitalizePipe,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent
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
