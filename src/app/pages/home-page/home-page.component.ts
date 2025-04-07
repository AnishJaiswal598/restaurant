import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
