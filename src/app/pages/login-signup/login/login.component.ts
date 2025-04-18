import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() toggle = new EventEmitter<'signup'>();

  toggleLogin = () => {
    this.toggle.emit('signup');
  };
}
