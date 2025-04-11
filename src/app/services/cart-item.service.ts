import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItem } from '../interfaces/cartItem.interface';

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private readonly CART_KEY = 'tastyBitesCart';
  private cartItems = new BehaviorSubject<cartItem[]>(
    this.getCartFromStorage()
  );
  constructor() {}

  set = (item: cartItem): void => {
    let currentCart = this.cartItems.value;
    const existingMeal = currentCart.find((m) => m.id == item.id);
    if (existingMeal) {
      existingMeal.quantity += item.quantity;
    } else {
      currentCart.push(item);
    }
    currentCart = currentCart.filter((cart) => {
      return cart.quantity > 0;
    });
    this.cartItems.next(currentCart);
    this.updateStorage(currentCart);
  };

  get = () => {
    return this.cartItems.asObservable();
  };

  clear = () => {
    this.cartItems.next([]);
    this.updateStorage([]);
  };

  private getCartFromStorage(): cartItem[] {
    const cart = localStorage.getItem(this.CART_KEY);
    return cart ? JSON.parse(cart) : [];
  }

  private updateStorage(cart: cartItem[]) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }
}
