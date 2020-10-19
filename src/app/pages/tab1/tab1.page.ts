import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DatalocalService } from '../../services/datalocal.service';

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
  constructor(private barcodeScanner: BarcodeScanner,
              private datalocal: DatalocalService) { }

  ngOnInit() {
  }
/*
  ionViewDidEnter(){
    console.log('ViewDidEnter');
  }
  ionViewDidLeave(){
    console.log('ViewDidLeave');
  }
  ionViewDidLoad(){
    console.log('ViewDidLoad');
  }*/
  ionViewWillEnter(){
    // console.log('ViewWillEnter');
    this.scan();
  }
  /*
  ionViewWillLeave(){
    console.log('ViewWillLeave');
  }
  ionViewWillUnload(){
    console.log('viewWillUnload');
  }
*/
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if ( !barcodeData.cancelled ){
          this.datalocal.guardarRegistro( barcodeData.format, barcodeData.text );
      }
     }).catch(err => {
         console.log('Error', err);
         this.datalocal.guardarRegistro( 'QRcode', 'https://github.com/franck2699/Walking-Care-Dogs' );
      //   this.datalocal.guardarRegistro( 'QRcode', 'geo:40.73151796986687,-74.06087294062502' );
     });
  }

}
