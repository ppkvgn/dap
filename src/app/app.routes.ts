import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
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
    title: 'Юридичні послуги'
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
  { path: '**',
    component: NotFoundComponent,
    title: 'Сторінку не знайдено' }
];
