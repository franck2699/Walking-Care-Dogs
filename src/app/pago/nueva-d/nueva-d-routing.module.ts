import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaDPage } from './nueva-d.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaDPageRoutingModule {}
