import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescuePage } from './rescue.page';

const routes: Routes = [
  {
    path: '',
    component: RescuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescuePageRoutingModule {}
