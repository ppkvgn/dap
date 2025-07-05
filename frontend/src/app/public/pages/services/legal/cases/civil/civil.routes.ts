import { Routes } from '@angular/router';

export const civilRoutes: Routes = [
  {
    path: 'civil',
    loadComponent: () =>
      import('./civil.component').then(m => m.CivilComponent),
    title: 'Цивільне право'
  }
];
