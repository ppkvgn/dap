import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PracticeComponent } from './pages/practice/practice.component.';
import { TeamComponent } from './pages/team/team.component.';
import { ContactComponent } from './pages/contact/contact.component.';
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
    title: 'Про компанію'
  },
  {
    path: 'practice',
    component: PracticeComponent,
    title: 'Практика'
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Команда'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Контакти'
  },
  { path: '**',
    component: NotFoundComponent,
    title: 'Сторінку не знайдено' },
  {
    path: '**',
    redirectTo: ''
  }
];
