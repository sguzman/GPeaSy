import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadMap(){
    const latLng = new google.maps.LatLng(-34.9290, 138.6010);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad Map');
    this.loadMap();
  }

}
