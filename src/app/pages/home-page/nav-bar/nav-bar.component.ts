import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  currentTab: string = '';
  ngOnInit(): void {
    this.currentTab = 'home';
  }

  changeCurrentTab = (tab: string) => {
    this.currentTab = tab;
  };
}
