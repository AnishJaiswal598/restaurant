import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Output() toggle = new EventEmitter<'login'>();

  toggleLogin = () => {
    this.toggle.emit('login');
  };
}
