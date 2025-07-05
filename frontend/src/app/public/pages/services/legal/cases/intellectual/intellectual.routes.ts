import { Routes } from '@angular/router';

export const intellectualRoutes: Routes = [
  {
    path: 'intellectual',
    loadComponent: () =>
      import('./intellectual.component').then(m => m.IntellectualComponent),
    title: 'Інтелектуальне право'
  }
];
