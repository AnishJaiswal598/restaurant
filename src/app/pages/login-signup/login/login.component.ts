import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @Output() toggle = new EventEmitter<'signup'>();
  private formBuilder = inject(FormBuilder);
  loginForm: FormGroup = new FormGroup({});
  switched: boolean = false;

  ngOnInit(): void {
    this.populateLoginForm();
  }

  populateLoginForm = () => {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  };

  toggleLogin = () => {
    this.toggle.emit('signup');
  };

  onSubmit = () => {
    this.loginForm.controls['email'].markAsUntouched();
    console.log(this.loginForm.value);
  };
}
