import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component..scss'
})
export class ContactComponent {
  constructor() { }

  ngOnInit(): void {
  }

  // You can add form handling logic here
  onSubmit(form: any): void {
    console.log('Form submitted', form);
    // Add your form submission logic here
  }
}
