import { Component } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) { }

  onSubmit(): void {
    this.contactService.submitContact(this.contact).subscribe(response => {
      console.log('Contact form submitted successfully', response);
      this.contact = { name: '', email: '', message: '' };
    });
  }
}

