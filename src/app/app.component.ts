import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './pages/home/contact/contact.component';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContactComponent,
    NavBarComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  imageBG: boolean = true;
  title = 'chinese-resturant';

  setImageBG = (tab: string) => {
    if (tab != 'home') {
      this.imageBG = false;
    } else {
      this.imageBG = true;
    }
  };
}
