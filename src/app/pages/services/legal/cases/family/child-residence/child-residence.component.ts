import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-child-residence',
  imports: [CommonModule, BreadcrumbsComponent, RouterLink],
  templateUrl: './child-residence.component.html',
})
export class ChildResidenceComponent {}
