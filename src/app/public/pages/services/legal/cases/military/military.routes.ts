import { Routes } from '@angular/router';

export const militaryRoutes: Routes = [
  {
    path: 'military',
    loadComponent: () =>
      import('./military.component').then(m => m.MilitaryComponent),
    title: 'Військове право'
  },
  {
    path: 'military/vlk-appeal',
    loadComponent: () =>
      import('./vlk-appeal/vlk-appeal.component').then(m => m.VlkAppealComponent),
    title: 'Оскарження ВЛК'
  },
  {
    path: 'military/mobilization-deferment',
    loadComponent: () =>
      import('./mobilization-deferment/mobilization-deferment.component').then(m => m.MobilizationDefermentComponent),
    title: 'Відстрочка від мобілізації'
  },
  {
    path: 'military/financial-support',
    loadComponent: () =>
      import('./financial-support/financial-support.component').then(m => m.FinancialSupportComponent),
    title: 'Грошове забезпечення'
  },
  {
    path: 'military/tcc-support',
    loadComponent: () =>
      import('./tcc-support/tcc-support.component').then(m => m.TccSupportComponent),
    title: 'Супровід у ТЦК'
  },
  {
    path: 'military/dismissal-zsu',
    loadComponent: () =>
      import('./dismissal-zsu/dismissal-zsu.component').then(m => m.DismissalZsuComponent),
    title: 'Звільнення з лав ЗСУ'
  },
  {
    path: 'military/ubd-status',
    loadComponent: () =>
      import('./ubd-status/ubd-status.component').then(m => m.UbdStatusComponent),
    title: 'Отримання статусу УБД'
  },
  {
    path: 'military/unit-transfer',
    loadComponent: () =>
      import('./unit-transfer/unit-transfer.component').then(m => m.UnitTransferComponent),
    title: 'Переведення в іншу частину'
  }
];
