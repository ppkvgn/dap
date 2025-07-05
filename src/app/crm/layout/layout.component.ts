import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout.component',
  imports: [CommonModule, RouterOutlet],
  template:  './crm-layout.component.html'
})
export class LayoutComponent {

}
