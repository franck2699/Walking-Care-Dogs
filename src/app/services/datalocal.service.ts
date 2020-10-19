import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class DatalocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage) {
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
  }
}
