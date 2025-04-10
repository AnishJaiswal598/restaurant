import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { foodItem } from '../../../../interfaces/foodItem.interface';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css',
})
export class FoodItemComponent {
  @Input() foodItem: foodItem = {
    name: '',
    image: '',
    ingredients: [''],
    price: 0,
    type: '',
  };
  quantity: number = 0;

  changeQuantity = (type: string) => {
    if (type == 'add') {
      this.quantity += 1;
    } else {
      this.quantity -= 1;
    }
  };
}
