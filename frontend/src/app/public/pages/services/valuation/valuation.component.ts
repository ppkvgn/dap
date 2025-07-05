import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-valuation',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './valuation.component.html',
  styleUrl: './valuation.component.scss'
})
export class ValuationComponent {

}
