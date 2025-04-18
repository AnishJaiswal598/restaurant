import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CurrentTabService } from '../../../services/current-tab.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  currentTab: string = '';
  constructor(private currentTabService: CurrentTabService) {}
  ngOnInit(): void {
    this.currentTabService.get().subscribe((tab) => {
      this.currentTab = tab;
    });
  }

  changeCurrentTab = (tab: string) => {
    this.currentTabService.set(tab);
  };
}
