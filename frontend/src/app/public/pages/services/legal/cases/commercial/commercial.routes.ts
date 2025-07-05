import { Routes } from '@angular/router';

export const commercialRoutes: Routes = [
  {
    path: 'commercial',
    loadComponent: () =>
      import('./commercial.component').then(m => m.CommercialComponent),
    title: 'Господарське право'
  }
];
