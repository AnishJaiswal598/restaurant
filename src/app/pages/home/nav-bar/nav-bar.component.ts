import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  @Output() tabValue = new EventEmitter<string>();
  currentTab: string = '';
  ngOnInit(): void {
    this.currentTab = 'home';
  }

  changeCurrentTab = (tab: string) => {
    this.currentTab = tab;
    this.tabValue.emit(this.currentTab);
  };
}
