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
        id: '0',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'lunch',
      },
      {
        id: '1',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'breakfast',
      },
      {
        id: '2',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
      },
      {
        id: '3',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'dinner',
      },
      {
        id: '4',
        name: 'Sandwich',
        image:
          'https://recipes.timesofindia.com/thumb/83740315.cms?width=1200&height=900',
        ingredients: ['Bread', 'Butter', 'Tomato', 'Cucumber'],
        price: 100,
        type: 'coffee',
      },
      {
        id: '5',
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
