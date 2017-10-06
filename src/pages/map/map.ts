import {Component, ElementRef, ViewChild} from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public geo: Geolocation) {
  }

  public addMarker(): void {

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    const content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  private addInfoWindow(marker, content): void {

    const infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  private loadMap(){
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
