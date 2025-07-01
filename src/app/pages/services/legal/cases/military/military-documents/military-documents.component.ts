import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-military-documents.component',
  imports: [
    RouterLink,
    BreadcrumbsComponent
  ],
  templateUrl: './military-documents.component.html',
  styleUrl: './military-documents.component.scss'
})
export class MilitaryDocumentsComponent {

}
