import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-military-service-rights.component',
  imports: [
    RouterLink,
    BreadcrumbsComponent
  ],
  templateUrl: './military-service-rights.component.html',
  styleUrl: './military-service-rights.component.scss'
})
export class MilitaryServiceRightsComponent {

}
