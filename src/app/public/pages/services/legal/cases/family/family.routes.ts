import { Routes } from '@angular/router';

export const familyRoutes: Routes = [
  {
    path: 'family',
    loadComponent: () =>
      import('./family.component').then(m => m.FamilyComponent),
    title: 'Сімейне право'
  },
  {
    path: 'family/alimony',
    loadComponent: () =>
      import('./alimony/alimony.component').then(m => m.AlimonyComponent),
    title: 'Аліменти'
  },
  {
    path: 'family/divorce',
    loadComponent: () =>
      import('./divorce/divorce.component').then(m => m.DivorceComponent),
    title: 'Розлучення'
  },
  {
    path: 'family/property-division',
    loadComponent: () =>
      import('./property-division/property-division.component').then(m => m.PropertyDivisionComponent),
    title: 'Поділ майна'
  },
  {
    path: 'family/child-residence',
    loadComponent: () =>
      import('./child-residence/child-residence.component').then(m => m.ChildResidenceComponent),
    title: 'Місце проживання дитини'
  },
  {
    path: 'family/parental-rights-termination',
    loadComponent: () =>
      import('./parental-rights-termination/parental-rights-termination.component').then(m => m.ParentalRightsTerminationComponent),
    title: 'Позбавлення батьківських прав'
  }
];
