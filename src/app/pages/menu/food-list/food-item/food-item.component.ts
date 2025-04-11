import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { foodItem } from '../../../../interfaces/foodItem.interface';
import { CartItemService } from '../../../../services/cart-item.service';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css',
})
export class FoodItemComponent {
  constructor(private cartItem: CartItemService) {}
  @Input() foodItem: foodItem = {
    id: '',
    name: '',
    image: '',
    ingredients: [''],
    price: 0,
    type: '',
  };
  quantity: number = 0;

  changeQuantity = (type: string, item: foodItem) => {
    if (type == 'add') {
      this.cartItem.set({ ...this.foodItem, quantity: 1 });
      this.quantity += 1;
    } else {
      this.cartItem.set({ ...this.foodItem, quantity: -1 });
      this.quantity -= 1;
    }
  };
}
