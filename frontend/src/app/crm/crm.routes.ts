import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';

export const CRM_ROUTES: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Панель керування'
      },
      {
        path: 'cases',
        loadComponent: () => import('./cases/case-list.component').then(m => m.CaseListComponent),
        title: 'Справи'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  }
];
