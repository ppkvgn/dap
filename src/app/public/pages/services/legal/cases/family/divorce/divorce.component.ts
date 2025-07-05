import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-divorce.component',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './divorce.component.html',
  styleUrl: './divorce.component.scss'
})
export class DivorceComponent {

}
