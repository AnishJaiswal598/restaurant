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
      image: 'assets/chef1.jpg',
      name: 'Raghav Iyer',
      description: 'South Indian spice maestro and innovator.',
    },
    {
      image: 'assets/chef2.jpg',
      name: 'Anaya Sharma',
      description: 'Queen of vibrant modern Indian fusion.',
    },
    {
      image: 'assets/chef3.jpg',
      name: 'Dev Kapoor',
      description: 'Tandoor specialist with a global twist.',
    },
    {
      image: 'assets/chef4.jpg',
      name: 'Sana Qureshi',
      description: 'Mughlai elegance on every single plate.',
    },
    {
      image: 'assets/chef5.jpg',
      name: 'Mehendra Joshi',
      description: 'Reinventing street food with gourmet flair.',
    },
  ];
}
