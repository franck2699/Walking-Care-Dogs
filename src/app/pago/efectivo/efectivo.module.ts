import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfectivoPageRoutingModule } from './efectivo-routing.module';

import { EfectivoPage } from './efectivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfectivoPageRoutingModule
  ],
  declarations: [EfectivoPage]
})
export class EfectivoPageModule {}
