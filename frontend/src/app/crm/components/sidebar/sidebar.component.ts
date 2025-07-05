import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: './sidebar.component.html',
})
export class SidebarComponent {}
