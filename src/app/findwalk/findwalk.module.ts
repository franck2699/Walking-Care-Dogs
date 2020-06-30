import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindwalkPageRoutingModule } from './findwalk-routing.module';

import { FindwalkPage } from './findwalk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindwalkPageRoutingModule
  ],
  declarations: [FindwalkPage]
})
export class FindwalkPageModule {}
