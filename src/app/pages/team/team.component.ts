import { Component } from '@angular/core';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  chefs = [
    {
      image: 'assets/chefs/chef1.jpg',
      name: 'Raghav Iyer',
      description: 'South Indian spice maestro and innovator.',
    },
    {
      image: 'assets/chefs/chef2.jpg',
      name: 'Anaya Sharma',
      description: 'Queen of vibrant modern Indian fusion.',
    },
    {
      image: 'assets/chefs/chef3.jpg',
      name: 'Dev Kapoor',
      description: 'Tandoor specialist with a global twist.',
    },
    {
      image: 'assets/chefs/chef4.jpg',
      name: 'Sana Qureshi',
      description: 'Mughlai elegance on every single plate.',
    },
    {
      image: 'assets/chefs/chef5.jpg',
      name: 'Mehendra Joshi',
      description: 'Reinventing street food with gourmet flair.',
    },
  ];
}
