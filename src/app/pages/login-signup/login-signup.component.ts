import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css',
})
export class LoginSignupComponent {
  currentCommponent: 'login' | 'signup' = 'login';

  toggleValue = (val: 'login' | 'signup') => {
    this.currentCommponent = val;
  };
}
