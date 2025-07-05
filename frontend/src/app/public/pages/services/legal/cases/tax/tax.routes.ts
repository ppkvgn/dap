import { Routes } from '@angular/router';

export const taxRoutes: Routes = [
  {
    path: 'tax',
    loadComponent: () =>
      import('./tax.component').then(m => m.TaxComponent),
    title: 'Податкове право'
  }
];
