import { Component, Input } from '@angular/core';
import { cartItem } from '../../../interfaces/cartItem.interface';
import { CartItemService } from '../../../services/cart-item.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  constructor(private cartList: CartItemService) {}
  @Input() cartItems: cartItem[] = [];
  cost: number = 0;
  handling: number = 40;
  shipping: number = 40;
  gst: number = 0;

  getCost = (): number => {
    this.cost = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.cost += this.cartItems[i].price * this.cartItems[i].quantity;
    }
    this.gst = 0.18 * this.cost;
    return this.cost;
  };

  netTotal = () => {
    return this.cost + this.handling + this.shipping + this.gst;
  };

  clearCart = () => {
    this.cartList.clear();
  };
}
