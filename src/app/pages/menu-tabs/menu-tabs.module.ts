import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTabsPageRoutingModule } from './menu-tabs-routing.module';

import { MenuTabsPage } from './menu-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTabsPageRoutingModule
  ],
  declarations: [MenuTabsPage]
})
export class MenuTabsPageModule {}
