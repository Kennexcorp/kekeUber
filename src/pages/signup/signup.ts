import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  firstName: any;
  lastName: any;
  otherNames: any;
  username: any;
  password: any;
  role: any;
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showLoader(message: string) {
    this.loader = this.loadingCtrl.create({
      content: message,
    });
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  signup() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.username, this.password)
      .then(data => {

        this.showLoader("Signing up...");
        this.loader.present();
        this.navCtrl.push(MenuPage, {loggedIn: true});
        this.loader.dismiss();
        this.showAlert('Sign up successful!');
        console.log('got data', data);

      })
      .catch(error => {

        this.showLoader("Signing in...");
        this.loader.present();
        this.showAlert(error.message);
        this.loader.dismiss();
        console.log('got an error', error);

      });
  }
}
