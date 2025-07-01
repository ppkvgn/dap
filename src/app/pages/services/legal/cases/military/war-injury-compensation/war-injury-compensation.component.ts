import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-war-injury-compensation.component',
  imports: [
    RouterLink,
    BreadcrumbsComponent
  ],
  templateUrl: './war-injury-compensation.component.html',
  styleUrl: './war-injury-compensation.component.scss'
})
export class WarInjuryCompensationComponent {

}
