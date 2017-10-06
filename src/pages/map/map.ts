import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {
  }

  loadMap(){
    this.geo.getCurrentPosition().then((position) => {

      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Map');
    this.loadMap();
  }

}
