import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindpetPageRoutingModule } from './findpet-routing.module';

import { FindpetPage } from './findpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindpetPageRoutingModule
  ],
  declarations: [FindpetPage]
})
export class FindpetPageModule {}
