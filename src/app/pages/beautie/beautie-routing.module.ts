import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautiePage } from './beautie.page';

const routes: Routes = [
  {
    path: '',
    component: BeautiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautiePageRoutingModule {}
