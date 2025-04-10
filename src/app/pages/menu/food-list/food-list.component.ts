import { Component } from '@angular/core';
import { FoodItemComponent } from './food-item/food-item.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent {
  foodList = [
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
}
