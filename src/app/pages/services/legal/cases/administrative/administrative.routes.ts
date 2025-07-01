import { Routes } from '@angular/router';

export const administrativeRoutes: Routes = [
  {
    path: 'administrative',
    loadComponent: () =>
      import('./administrative.component').then(m => m.AdministrativeComponent),
    title: 'Адміністративне право'
  }
];
