import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { mobileNo, email } from '../../../constants/contact';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginSignupComponent } from '../../login-signup/login-signup.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly dialog = inject(MatDialog);
  email: string = email;
  telephone: string = mobileNo;

  constructor() {}

  openLoginComponent = () => {
    const dialogRef = this.dialog.open(LoginSignupComponent, {
      width: '1000px',
      height: '600px',
      maxWidth: 'none',
      backdropClass: 'dialog-background',
    });
  };
}
