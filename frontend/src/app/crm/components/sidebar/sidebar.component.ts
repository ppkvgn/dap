import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  navLinks = [
    { path: '/crm/dashboard', label: 'Дашборд', icon: '🔸' },
    { path: '/crm/cases', label: 'Справи', icon: '📂' },
    { path: '/crm/documents', label: 'Документи', icon: '🧾' },
    { path: '/crm/payments', label: 'Фінанси', icon: '💵' },
    { path: '/crm/reports', label: 'Звіти', icon: '📊' },
    { path: '/crm/clients', label: 'Клієнти', icon: '📋' },
    { path: '/crm/settings', label: 'Налаштування', icon: '⚙️' }
  ];
}
