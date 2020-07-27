import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajoPage } from './trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: TrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajoPageRoutingModule {}
