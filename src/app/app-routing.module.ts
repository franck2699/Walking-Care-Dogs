import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'findpet',
    loadChildren: () => import('./findpet/findpet.module').then( m => m.FindpetPageModule)
  },
  {
    path: 'findwalk',
    loadChildren: () => import('./findwalk/findwalk.module').then( m => m.FindwalkPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'miperfil',
    loadChildren: () => import('./miperfil/miperfil.module').then( m => m.MiperfilPageModule)
  },
  {
    path: 'take',
    loadChildren: () => import('./pages/take/take.module').then( m => m.TakePageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: 'healthy',
    loadChildren: () => import('./pages/healthy/healthy.module').then( m => m.HealthyPageModule)
  },
  {
    path: 'rescue',
    loadChildren: () => import('./pages/rescue/rescue.module').then( m => m.RescuePageModule)
  },
  {
    path: 'beautie',
    loadChildren: () => import('./pages/beautie/beautie.module').then( m => m.BeautiePageModule)
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./pages/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'encuentro',
    loadChildren: () => import('./pages/encuentro/encuentro.module').then( m => m.EncuentroPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'menu-tabs',
    loadChildren: () => import('./pages/menu-tabs/menu-tabs.module').then( m => m.MenuTabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
