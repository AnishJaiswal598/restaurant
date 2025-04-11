import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../../services/cart-item.service';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CartSummaryComponent, CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cartItem: CartItemService) {}
  ngOnInit(): void {
    this.cartItem.get().subscribe((item: any) => {
      console.log(item);
    });
  }

  clearCart = () => {
    this.cartItem.clear();
  };
}
