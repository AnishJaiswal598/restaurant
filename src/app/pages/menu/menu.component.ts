import { Component, OnInit } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { CommonModule } from '@angular/common';
import { foodItem } from '../../interfaces/foodItem.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FoodListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  list: foodItem[] = [];
  typeFoodList: foodItem[] = [];

  ngOnInit(): void {
    this.list = [
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
      },
    ];

    this.typeFoodList = [...this.list];
  }
  selectType: string = 'all';

  changeType = (type: string) => {
    this.selectType = type;
  };
}
