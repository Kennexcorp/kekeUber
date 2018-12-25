import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileInfo = {
    firstName: '',
    lastName: '',
    otherNames: '',
    username: '',
    role: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('username').then((value) => {
      this.storage.get(value).then((data) => {
        this.profileInfo.firstName = data.firstName;
        this.profileInfo.lastName = data.lastName;
        this.profileInfo.otherNames = data.otherNames;
        this.profileInfo.username = data.username;
        this.profileInfo.role = data.role;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
