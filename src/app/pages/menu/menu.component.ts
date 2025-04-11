import { Component, OnInit } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { CommonModule } from '@angular/common';
import { CartItemService } from '../../services/cart-item.service';
import { cartItem } from '../../interfaces/cartItem.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FoodListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  list: cartItem[] = [];
  typeFoodList: cartItem[] = [];
  storedList: cartItem[] = [];
  constructor(private cartItem: CartItemService) {}

  ngOnInit(): void {
    this.cartItem.get().subscribe((item: cartItem[]) => {
      this.storedList = item;
    });
    this.list = [
      {
        id: '0',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'lunch',
        quantity: 0,
      },
      {
        id: '1',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'breakfast',
        quantity: 0,
      },
      {
        id: '2',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
        quantity: 0,
      },
      {
        id: '3',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
        quantity: 0,
      },
      {
        id: '4',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'coffee',
        quantity: 0,
      },
      {
        id: '5',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'snacks',
        quantity: 0,
      },
    ];

    this.typeFoodList = [...this.list];
    for (let i = 0; i < this.storedList.length; i++) {
      const element = this.storedList[i];
      for (let j = 0; j < this.typeFoodList.length; j++) {
        if (this.storedList[i].id == this.typeFoodList[j].id) {
          this.typeFoodList[i].quantity = this.storedList[j].quantity;
          break;
        }
      }
    }
  }
  selectType: string = 'all';

  changeType = (type: string) => {
    this.selectType = type;
    if (type === 'all') {
      this.typeFoodList = [...this.list];
    } else {
      this.typeFoodList = this.list.filter((item) => item.type === type);
    }
  };
}
