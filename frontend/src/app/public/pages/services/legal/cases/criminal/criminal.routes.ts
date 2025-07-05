import { Routes } from '@angular/router';

export const criminalRoutes: Routes = [
  {
    path: 'criminal',
    loadComponent: () =>
      import('./criminal.component').then(m => m.CriminalComponent),
    title: 'Кримінальне право'
  }
];
