import { Routes } from '@angular/router';

export const laborRoutes: Routes = [
  {
    path: 'labor',
    loadComponent: () =>
      import('./labor.component').then(m => m.LaborComponent),
    title: 'Трудове право'
  }
];
