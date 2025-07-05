import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactModalComponent} from '../../../shared/modal/contact-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showModal = false;
}
