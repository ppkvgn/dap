import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbsComponent} from '../../../../../../shared/breadcrumbs/breadcrumbs.component';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-parental-rights-termination',
  imports: [CommonModule, BreadcrumbsComponent, RouterLink],
  templateUrl: './parental-rights-termination.component.html',
})
export class ParentalRightsTerminationComponent {}
