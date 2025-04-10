import { Component } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FoodListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  selectType: string = 'all';
  changeType = (type: string) => {
    this.selectType = type;
  };
}
