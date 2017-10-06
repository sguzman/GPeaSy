import { Component } from '@angular/core';
$IMPORTSTATEMENT

/**
 * Generated class for the Map page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
$IONICPAGE
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class Map {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Map');
  }

}
