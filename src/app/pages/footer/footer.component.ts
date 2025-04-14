import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { email, mobileNo } from '../../constants/contact';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  mobileNumber: string = mobileNo;
  emailAddress: string = email;
  getCurrentYear = () => {
    return new Date().getFullYear();
  };
}
