import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItem } from '../interfaces/cartItem.interface';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private cartItems = new BehaviorSubject<cartItem[]>([]);
  constructor() {}

  set = (item: cartItem): void => {
    const currentCart = this.cartItems.value;
    const existingMeal = currentCart.find((m) => m.id == item.id);
    if (existingMeal) {
      existingMeal.quantity += item.quantity;
    } else {
      currentCart.push(item);
    }
    this.cartItems.next(currentCart);
  };

  get = () => {
    return this.cartItems.asObservable();
  };
}
