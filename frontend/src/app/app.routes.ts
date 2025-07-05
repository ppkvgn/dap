import { Routes } from '@angular/router';

import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { TeamComponent } from './public/pages/team/team.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';

import { familyRoutes } from './public/pages/services/legal/cases/family/family.routes';
import { militaryRoutes } from './public/pages/services/legal/cases/military/military.routes';
import { civilRoutes } from './public/pages/services/legal/cases/civil/civil.routes';
import { administrativeRoutes } from './public/pages/services/legal/cases/administrative/administrative.routes';
import { criminalRoutes } from './public/pages/services/legal/cases/criminal/criminal.routes';
import { taxRoutes } from './public/pages/services/legal/cases/tax/tax.routes';
import { laborRoutes } from './public/pages/services/legal/cases/labor/labor.routes';
import { landRoutes } from './public/pages/services/legal/cases/land/land.routes';
import { housingRoutes } from './public/pages/services/legal/cases/housing/housing.routes';
import { corporateRoutes } from './public/pages/services/legal/cases/corporate/corporate.routes';
import { intellectualRoutes } from './public/pages/services/legal/cases/intellectual/intellectual.routes';
import {customsRoutes} from './public/pages/services/legal/cases/customs/customs.routes';
import {commercialRoutes} from './public/pages/services/legal/cases/commercial/commercial.routes';

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
      description: 'Дізнайтесь більше про нашу юридичну фірму Деменкова і Партнери, її досвід та експертність у праві.'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Послуги'
  },
  {
    path: 'services/legal',
    loadComponent: () => import('./public/pages/services/legal/legal.component').then(m => m.LegalComponent),
    title: 'Юридичні послуги',
    children: [
      ...familyRoutes,
      ...militaryRoutes,
      ...civilRoutes,
      ...commercialRoutes,
      ...customsRoutes,
      ...administrativeRoutes,
      ...criminalRoutes,
      ...taxRoutes,
      ...laborRoutes,
      ...landRoutes,
      ...housingRoutes,
      ...corporateRoutes,
      ...intellectualRoutes,
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'family'
      }
    ]
  },
  {
    path: 'services/valuation',
    loadComponent: () => import('./public/pages/services/valuation/valuation.component').then(m => m.ValuationComponent),
    title: 'Оцінка майна'
  },
  {
    path: 'services/seals',
    loadComponent: () => import('./public/pages/services/seals/seals.component').then(m => m.SealsComponent),
    title: 'Печатки та штампи'
  },
  {
    path: 'services/grants',
    loadComponent: () => import('./public/pages/services/grants/grants.component').then(m => m.GrantsComponent),
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
    path: 'crm',
    loadChildren: () => import('./crm/crm.routes').then(m => m.CRM_ROUTES)
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Сторінку не знайдено'
  },
];
