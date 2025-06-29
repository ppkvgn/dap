import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-property-division',
  imports: [CommonModule, BreadcrumbsComponent, RouterLink],
  templateUrl: './property-division.component.html',
})
export class PropertyDivisionComponent {}
