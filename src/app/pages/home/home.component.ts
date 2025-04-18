import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CurrentTabService } from '../../services/current-tab.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;
  slideInterval: any;
  slides = [
    {
      image: 'assets/home/slide_1.jpg',
      title: 'Welcome To',
      head: 'TASTY BITES RESTAURANT',
      buttonContent: 'RESERVATION NOW',
      redirect: '/book-table',
    },
    {
      image: 'assets/home/slide_3.jpg',
      title: 'Our Menus',
      head: "SEE WHAT'S NEW TODAY",
      buttonContent: 'TODAYS MENU',
      redirect: '/menu',
    },
    {
      image: 'assets/home/slide_2.jpg',
      title: 'Get Ready',
      head: 'TO JOIN WITH US',
      buttonContent: 'BOOK A TABLE',
      redirect: '/book-table',
    },
  ];
  currentSlide = this.slides[this.currentSlideIndex];

  constructor(private currentTab: CurrentTabService) {}
  ngOnInit(): void {
    this.startSlideTimer();
  }

  startSlideTimer = () => {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
      this.currentSlide = this.slides[this.currentSlideIndex];
    }, 4000);
  };

  moveSlide = (direction: string): void => {
    clearInterval(this.slideInterval);
    if (direction == 'left') {
      this.currentSlideIndex =
        (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
      this.currentSlide = this.slides[this.currentSlideIndex];
    } else {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
      this.currentSlide = this.slides[this.currentSlideIndex];
    }
    this.startSlideTimer();
  };

  setCurrentTab = (tab: string) => {
    tab = tab.replace('/', '');
    this.currentTab.set(tab);
  };

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}
