import { Routes } from '@angular/router';

export const customsRoutes: Routes = [
  {
    path: 'customs',
    loadComponent: () =>
      import('./customs.component').then(m => m.CustomsComponent),
    title: 'Митне право'
  }
];
