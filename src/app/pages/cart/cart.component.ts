import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../../services/cart-item.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { cartItem } from '../../interfaces/cartItem.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartListComponent,
    CartSummaryComponent,
    CartListComponent,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: cartItem[] = [];
  constructor(private cartList: CartItemService) {}
  ngOnInit(): void {
    this.cartList.get().subscribe((items: cartItem[]) => {
      this.cartItems = items;
    });
  }
}
