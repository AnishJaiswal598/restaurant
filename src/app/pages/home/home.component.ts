import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
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
    },
    {
      image: 'assets/home/slide_3.jpg',
      title: 'Our Menus',
      head: "SEE WHAT'S NEW TODAY",
      buttonContent: 'TODAYS MENU',
    },
    {
      image: 'assets/home/slide_2.jpg',
      title: 'Get Ready',
      head: 'TO JOIN WITH US',
      buttonContent: 'BOOK A TABLE',
    },
  ];
  currentSlide = this.slides[this.currentSlideIndex];

  ngOnInit(): void {
    this.startSlideTimer();
  }

  startSlideTimer = () => {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
      this.currentSlide = this.slides[this.currentSlideIndex];
    }, 5000);
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

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}
