import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfectivoPage } from './efectivo.page';

const routes: Routes = [
  {
    path: '',
    component: EfectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfectivoPageRoutingModule {}
