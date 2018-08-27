import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import {WelcomePage} from "../pages/welcome/welcome";
import {SignupPage} from "../pages/signup/signup";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {TripsPage} from "../pages/trips/trips";

const firebaseAuth = {
  apiKey: "AIzaSyAZxipfaMZfF5lMlB33iDm2bJbcPnZf24w",
  authDomain: "kekeuber-23e98.firebaseapp.com",
  databaseURL: "https://kekeuber-23e98.firebaseio.com",
  projectId: "kekeuber-23e98",
  storageBucket: "kekeuber-23e98.appspot.com",
  messagingSenderId: "308364290402"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SignupPage,
    TripsPage,
    MenuPage,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SignupPage,
    TripsPage,
    HomePage,
    MenuPage,
    ListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
