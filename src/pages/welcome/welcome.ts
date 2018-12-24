import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {AngularFireAuth} from "angularfire2/auth";
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  username: any;
  password: any;
  error: any;
  loader: any;
  role: string = "customer";

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireAuth: AngularFireAuth, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.fireAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        navCtrl.push(MenuPage);
      }
    });
  }

  ionViewCanEnter() {
    /*this.fireAuth.auth.onAuthStateChanged(function (user) {

      if (user) {
        navCtrl.push(MenuPage);
      }
    });*/
    console.log('ionViewCanEnter WelcomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  showAlert(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoader(message: string) {
    this.loader = this.loadingCtrl.create({
      content: message,
    });
  }

  login(){
    this.showLoader('Logging in...');
    this.loader.present();
    this.fireAuth.auth.signInWithEmailAndPassword(this.username, this.password)
      .then(data => {

        console.log('Got data', data);
        this.navCtrl.push(MenuPage);
        this.loader.dismiss();
        this.showAlert("You have logged in successfully!");

      })
      .catch(error => {

        console.log('got Error', error);
        this.loader.dismiss();
        this.showAlert(error.message);

      });


  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

}
