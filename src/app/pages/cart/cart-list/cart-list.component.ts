import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../../../services/cart-item.service';
import { cartItem } from '../../../interfaces/cartItem.interface';
import { FoodItemComponent } from '../../menu/food-list/food-item/food-item.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent implements OnInit {
  cartItems: cartItem[] = [];
  constructor(private cartList: CartItemService) {}
  ngOnInit(): void {
    this.cartList.get().subscribe((items: cartItem[]) => {
      this.cartItems = items;
    });
  }
}
