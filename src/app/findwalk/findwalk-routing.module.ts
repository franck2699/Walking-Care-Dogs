import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindwalkPage } from './findwalk.page';

const routes: Routes = [
  {
    path: '',
    component: FindwalkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindwalkPageRoutingModule {}
