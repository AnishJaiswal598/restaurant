import { Component, Input } from '@angular/core';
import { FoodItemComponent } from './food-item/food-item.component';
import { foodItem } from '../../../interfaces/foodItem.interface';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {
  @Input() foodList: foodItem[] = [];
}
