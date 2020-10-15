import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

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
