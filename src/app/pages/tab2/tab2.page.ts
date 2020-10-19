import { Component, OnInit } from '@angular/core';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {


  constructor( public datalocal: DatalocalService ) { }

  ngOnInit() {
  }
 /* ionViewDidEnter(){
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
*/
  enviarCorreo(){
    console.log( 'Enviando Correo' );
  }

  abrirRegistros( registro ){
    console.log( 'Abrir registro');
    this.datalocal.abrirregistro( registro );
  }
}
