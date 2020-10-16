import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    console.log('ViewDidEnter');
  }
  ionViewDidLeave(){
    console.log('ViewDidLeave');
  }
  ionViewDidLoad(){
    console.log('ViewDidLoad');
  }
  ionViewWillEnter(){
    console.log('ViewWillEnter');
    this.scan(); 
  }
  ionViewWillLeave(){
    console.log('ViewWillLeave');
  }
  ionViewWillUnload(){
    console.log('viewWillUnload');
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
