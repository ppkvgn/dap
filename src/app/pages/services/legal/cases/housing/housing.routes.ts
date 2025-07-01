import { Routes } from '@angular/router';

export const housingRoutes: Routes = [
  {
    path: 'housing',
    loadComponent: () =>
      import('./housing.component').then(m => m.HousingComponent),
    title: 'Житлове право'
  }
];
