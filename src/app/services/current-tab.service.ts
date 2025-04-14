import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentTabService {
  private currentTab = new Subject<string>();
  constructor() {}

  set(tabName: string) {
    this.currentTab.next(tabName);
  }

  get() {
    return this.currentTab.asObservable();
  }
}
