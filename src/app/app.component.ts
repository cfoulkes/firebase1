import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {
    this.items = this.af.database.list('items');
  }

  login() {
    console.log('login');
    this.af.auth.login(
      {
        email: 'user1@b.com',
        password: 'password'
      }
      // ,
      // {
      //   provider: AuthProviders.Password,
      //   method: AuthMethods.Password,
      // }
      );
  }

  logout() {
    console.log('logout');
    this.af.auth.logout();
  }
}
