import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaDPageRoutingModule } from './nueva-d-routing.module';

import { NuevaDPage } from './nueva-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaDPageRoutingModule
  ],
  declarations: [NuevaDPage]
})
export class NuevaDPageModule {}
