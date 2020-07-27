import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuentroPage } from './encuentro.page';

const routes: Routes = [
  {
    path: '',
    component: EncuentroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuentroPageRoutingModule {}
