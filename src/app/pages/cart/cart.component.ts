import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../../services/cart-item.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cartItem: CartItemService) {}
  ngOnInit(): void {
    this.cartItem.get().subscribe((item) => {
      console.log(item);
    });
  }
}
