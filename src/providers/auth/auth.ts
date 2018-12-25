import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  login(email: string) {
    this.storage.set('isLoggedIn', '1');
    return this.storage.get(email);
  }
  register(details) {
    this.storage.set('isLoggedIn', '1');

    if (this.storage.set(details.email, details)) {
      return true;
    }
  }

  logout () {
    this.storage.remove('isLoggedIn');
  }

  isLoggedIn() {

    this.storage.get('isLoggedIn').then((value) => {
      if (value) {
        return true;
      }
    });

  }
}
