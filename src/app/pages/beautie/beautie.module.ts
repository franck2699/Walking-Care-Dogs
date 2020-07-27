import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautiePageRoutingModule } from './beautie-routing.module';

import { BeautiePage } from './beautie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautiePageRoutingModule
  ],
  declarations: [BeautiePage]
})
export class BeautiePageModule {}
