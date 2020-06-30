import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindpetPage } from './findpet.page';

const routes: Routes = [
  {
    path: '',
    component: FindpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindpetPageRoutingModule {}
