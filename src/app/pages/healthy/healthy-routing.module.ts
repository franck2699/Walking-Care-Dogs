import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthyPage } from './healthy.page';

const routes: Routes = [
  {
    path: '',
    component: HealthyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthyPageRoutingModule {}
