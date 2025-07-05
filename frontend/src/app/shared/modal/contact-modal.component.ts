import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule
  ],
  templateUrl: './contact-modal.component.html'
})
export class ContactModalComponent {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  agreementChecked = false;


  closeModal() {
    this.close.emit();
  }
}
