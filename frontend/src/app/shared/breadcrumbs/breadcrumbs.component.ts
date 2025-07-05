import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-breadcrumbs',
  imports: [CommonModule, RouterModule],
  template: `
  <nav class="text-sm text-gray-600 mb-6">
    <ol class="list-reset flex flex-wrap items-center gap-2">
      <li>
        <a routerLink="/" class="text-blue-600 hover:underline">Головна</a>
      </li>
      <ng-container *ngFor="let crumb of breadcrumbs; let last = last">
        <li class="text-gray-400">/</li>
        <li>
          <ng-container *ngIf="!last">
            <a [routerLink]="crumb.url" class="text-blue-600 hover:underline">{{ crumb.label }}</a>
          </ng-container>
          <ng-container *ngIf="last">
            <span class="text-gray-800 font-semibold" aria-current="page">{{ crumb.label }}</span>
          </ng-container>
        </li>
      </ng-container>
    </ol>
  </nav>
`

})
export class BreadcrumbsComponent {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.buildBreadcrumbs(this.route.root);
    });
  }

  buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []) {
    const children = route.children;

    if (children.length === 0) {
      this.breadcrumbs = breadcrumbs;
      return;
    }

    for (let child of children) {
      const segments = child.snapshot.url;

      for (let segment of segments) {
        const path = segment.path;
        url += `/${path}`;
        const label = this.getLabel(path);
        breadcrumbs.push({ label, url });
      }

      this.buildBreadcrumbs(child, url, breadcrumbs);
    }
  }


  getLabel(segment: string): string {
    const map: Record<string, string> = {
      services: 'Послуги',
      legal: 'Юридичні послуги',
      family: 'Сімейне право',
      civil: 'Цивільне право',
      tax: 'Податкове право',
      criminal: 'Кримінальне право',
      alimony: 'Аліменти',
      divorce: 'Розлучення',
      'property-division': 'Поділ майна',
      'child-residence': 'Місце проживання дитини',
      'parental-rights-termination': 'Позбавлення батьківських прав'
    };

    return map[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

}
