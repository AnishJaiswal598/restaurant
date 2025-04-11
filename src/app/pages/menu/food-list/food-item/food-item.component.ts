import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItemService } from '../../../../services/cart-item.service';
import { cartItem } from '../../../../interfaces/cartItem.interface';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css',
})
export class FoodItemComponent {
  constructor(private cartItem: CartItemService) {}
  @Input() foodItem: cartItem = {
    id: '',
    name: '',
    image: '',
    ingredients: [''],
    price: 0,
    type: '',
    quantity: 0,
  };

  changeQuantity = (type: string, item: cartItem) => {
    if (type == 'add') {
      this.cartItem.set({ ...this.foodItem, quantity: 1 });
      this.foodItem.quantity += 1;
    } else {
      this.cartItem.set({ ...this.foodItem, quantity: -1 });
      this.foodItem.quantity -= 1;
    }
  };
}
