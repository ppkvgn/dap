import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {SearchBoxComponent} from '../search-box/search-box.component';
import {LoginModalComponent} from '../modal/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchBoxComponent, LoginModalComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  showLogin = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
