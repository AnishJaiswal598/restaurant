import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { mobileNo, email } from '../../../constants/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  email: string = email;
  telephone: string = mobileNo;
}
