import { Routes } from '@angular/router';

export const militaryRoutes: Routes = [
  {
    path: 'military',
    loadComponent: () =>
      import('./military.component').then(m => m.MilitaryComponent),
    title: 'Військове право'
  },
  {
    path: 'military/mobilization-appeal',
    loadComponent: () =>
      import('./mobilization-appeal/mobilization-appeal.component').then(m => m.MobilizationAppealComponent),
    title: 'Оскарження мобілізації'
  },
  {
    path: 'military/military-service-rights',
    loadComponent: () =>
      import('./military-service-rights/military-service-rights.component').then(m => m.MilitaryServiceRightsComponent),
    title: 'Захист прав військовослужбовців'
  },
  {
    path: 'military/war-injury-compensation',
    loadComponent: () =>
      import('./war-injury-compensation/war-injury-compensation.component').then(m => m.WarInjuryCompensationComponent),
    title: 'Виплати за поранення або загибель'
  },
  {
    path: 'military/military-documents',
    loadComponent: () =>
      import('./military-documents/military-documents.component').then(m => m.MilitaryDocumentsComponent),
    title: 'Підготовка військових документів'
  }
];
