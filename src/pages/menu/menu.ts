import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Nav, App} from 'ionic-angular';
import { HomePage } from '../home/home';
import {WelcomePage} from "../welcome/welcome";
import {TripsPage} from "../trips/trips";
import {AngularFireAuth} from "angularfire2/auth";
import {ProfilePage} from "../profile/profile";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public fireAuth: AngularFireAuth, public storage: Storage) {

    this.pages = [

      { title: 'Home', component: HomePage },
      { title: 'My Profile', component: ProfilePage},
      { title: 'Your Trips', component: TripsPage },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout()
  {
    this.storage.remove('isLoggedIn');
    this.storage.remove('username');
    this.app.getRootNav().push(WelcomePage);

  }

}
