import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuTabsPage } from './menu-tabs.page';
import { Tab1PageModule } from '../tab1/tab1.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuTabsPage,
    children: [
      {
        path: 'scan',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'history',
        children: [
          {
          path: '',
          loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
          },
          {
          path: 'mapa/:geo',
          loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabsPageRoutingModule {}
