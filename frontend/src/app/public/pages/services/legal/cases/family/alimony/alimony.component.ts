import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../../../../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-alimony.component',
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './alimony.component.html',
  styleUrl: './alimony.component.scss'
})
export class AlimonyComponent {

}
