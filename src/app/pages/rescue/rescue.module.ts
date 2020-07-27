import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescuePageRoutingModule } from './rescue-routing.module';

import { RescuePage } from './rescue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescuePageRoutingModule
  ],
  declarations: [RescuePage]
})
export class RescuePageModule {}
