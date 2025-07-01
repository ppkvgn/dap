import { Routes } from '@angular/router';

export const landRoutes: Routes = [
  {
    path: 'land',
    loadComponent: () =>
      import('./land.component').then(m => m.LandComponent),
    title: 'Земельне право'
  }
];
