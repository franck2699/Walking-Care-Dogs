import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthyPageRoutingModule } from './healthy-routing.module';

import { HealthyPage } from './healthy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthyPageRoutingModule
  ],
  declarations: [HealthyPage]
})
export class HealthyPageModule {}
