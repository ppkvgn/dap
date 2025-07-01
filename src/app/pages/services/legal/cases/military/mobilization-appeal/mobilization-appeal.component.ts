import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-mobilization-appeal.mobilization-appeal.component',
  imports: [
    RouterLink,
    BreadcrumbsComponent
  ],
  templateUrl: './mobilization-appeal.component.html',
  styleUrl: './mobilization-appeal.component.scss'
})
export class MobilizationAppealComponent {

}
