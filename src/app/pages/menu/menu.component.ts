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
        type: 'lunch',
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'breakfast',
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'coffee',
      },
      {
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'snacks',
      },
    ];

    this.typeFoodList = [...this.list];
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
