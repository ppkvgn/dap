import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// 🔹 Юридичні галузі
import { familyRoutes } from './pages/services/legal/cases/family/family.routes';
import { militaryRoutes } from './pages/services/legal/cases/military/military.routes';
import { civilRoutes } from './pages/services/legal/cases/civil/civil.routes';
import { administrativeRoutes } from './pages/services/legal/cases/administrative/administrative.routes';
import { criminalRoutes } from './pages/services/legal/cases/criminal/criminal.routes';
import { taxRoutes } from './pages/services/legal/cases/tax/tax.routes';
import { laborRoutes } from './pages/services/legal/cases/labor/labor.routes';
import { landRoutes } from './pages/services/legal/cases/land/land.routes';
import { housingRoutes } from './pages/services/legal/cases/housing/housing.routes';
import { corporateRoutes } from './pages/services/legal/cases/corporate/corporate.routes';
import { intellectualRoutes } from './pages/services/legal/cases/intellectual/intellectual.routes';
import {customsRoutes} from './pages/services/legal/cases/customs/customs.routes';
import {commercialRoutes} from './pages/services/legal/cases/commercial/commercial.routes';

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
    loadComponent: () => import('./pages/services/legal/legal.component').then(m => m.LegalComponent),
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
