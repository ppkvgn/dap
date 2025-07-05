import { Routes } from '@angular/router';

export const corporateRoutes: Routes = [
  {
    path: 'corporate',
    loadComponent: () =>
      import('./corporate.component').then(m => m.CorporateComponent),
    title: 'Корпоративне право'
  }
];
