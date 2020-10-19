import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root',
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage,
              private navctrl: NavController,
              private iabAppBrowser: InAppBrowser) {

    this.cargarStorage();

  }

  async cargarStorage(){
    this.guardados = await this.storage.get('registros') || [];
  }

  async guardarRegistro(formato: string, text: string) {

    await this.cargarStorage();

    const nuevoRegistro = new Registro(formato, text);
    this.guardados.unshift(nuevoRegistro);

    console.log (this.guardados);
    this.storage.set('registros', this.guardados);

    this.abrirregistro( nuevoRegistro );
  }

  abrirregistro(registro: Registro){
      this.navctrl.navigateForward('/tabs/history');

      switch ( registro.type ){
        case 'http':
            // abrir navegador web
            this.iabAppBrowser.create( registro.text, '_system');
            break;
      }
  }
}
