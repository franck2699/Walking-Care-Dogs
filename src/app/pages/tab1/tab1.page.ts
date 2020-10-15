import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor() { }

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
  }
  ionViewWillLeave(){
    console.log('ViewWillLeave');
  }
  ionViewWillUnload(){
    console.log('viewWillUnload');
  }

}
