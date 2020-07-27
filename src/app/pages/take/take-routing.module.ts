import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakePage } from './take.page';

const routes: Routes = [
  {
    path: '',
    component: TakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakePageRoutingModule {}
