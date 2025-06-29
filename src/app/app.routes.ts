import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Головна'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Про компанію',
    data: {
      description: 'Дізнайтесь більше про нашу юридичну фірму Деменкова і партнери, її досвід та експертність у праві.'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Послуги'
  },
  {
    path: 'services/legal',
    loadComponent: () => import('./pages/services/legal/legal.component').then(m => m.LegalComponent),
    title: 'Юридичні послуги',
    children: [
      {
        path: 'family',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/family.component').then(m => m.FamilyComponent),
        title: 'Сімейне право'
      },
      {
        path: 'family/alimony',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/alimony/alimony.component').then(m => m.AlimonyComponent),
        title: 'Аліменти'
      },
      {
        path: 'family/divorce',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/divorce/divorce.component').then(m => m.DivorceComponent),
        title: 'Розлучення'
      },
      {
        path: 'family/property-division',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/property-division/property-division.component').then(m => m.PropertyDivisionComponent),
        title: 'Поділ майна'
      },
      {
        path: 'family/child-residence',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/child-residence/child-residence.component').then(m => m.ChildResidenceComponent),
        title: 'Місце проживання дитини'
      },
      {
        path: 'family/parental-rights-termination',
        loadComponent: () =>
          import('./pages/services/legal/cases/family/parental-rights-termination/parental-rights-termination.component').then(m => m.ParentalRightsTerminationComponent),
        title: 'Позбавлення батьківських прав'
      },

      {
        path: 'civil',
        loadComponent: () =>
          import('./pages/services/legal/cases/civil/civil.component').then(m => m.CivilComponent),
        title: 'Цивільне право'
      },
      {
        path: 'tax',
        loadComponent: () =>
          import('./pages/services/legal/cases/tax/tax.component').then(m => m.TaxComponent),
        title: 'Податкове право'
      },
      {
        path: 'criminal',
        loadComponent: () =>
          import('./pages/services/legal/cases/criminal/criminal.component').then(m => m.CriminalComponent),
        title: 'Кримінальне право'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'family'  // Default branch if none selected
      }
    ]
  },
  {
    path: 'services/valuation',
    loadComponent: () => import('./pages/services/valuation/valuation.component').then(m => m.ValuationComponent),
    title: 'Оцінка майна'
  },
  {
    path: 'services/seals',
    loadComponent: () => import('./pages/services/seals/seals.component').then(m => m.SealsComponent),
    title: 'Печатки та штампи'
  },
  {
    path: 'services/grants',
    loadComponent: () => import('./pages/services/grants/grants.component').then(m => m.GrantsComponent),
    title: 'Гранти та супровід'
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Команда'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Контакти',
    data: {
      description: 'Контактна інформація: адреса, телефон, email нашої юридичної компанії Деменкова і Партнери.'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Сторінку не знайдено'
  }
];
