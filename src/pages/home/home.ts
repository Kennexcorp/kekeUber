import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

declare const google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  // map: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(51.507350, -0.1277)

    //map options
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position, map
    })
  }

}
