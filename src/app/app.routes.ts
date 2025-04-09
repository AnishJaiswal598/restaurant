import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TeamComponent } from './pages/team/team.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/home/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
];
