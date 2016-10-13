import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDhtzK2i72VbnPdAsyzfHJFVAL6ABt-tXg",
    authDomain: "angular1-7ac38.firebaseapp.com",
    databaseURL: "https://angular1-7ac38.firebaseio.com",
    storageBucket: "angular1-7ac38.appspot.com",
    messagingSenderId: "52072024120"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
