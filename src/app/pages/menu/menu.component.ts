import { Component } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FoodListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
