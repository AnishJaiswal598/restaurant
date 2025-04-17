import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentTableService {
  private currentTable = new BehaviorSubject<number>(0);
  constructor() {}

  public get(): Observable<number> {
    return this.currentTable.asObservable();
  }

  public set(v: number) {
    this.currentTable.next(v);
  }
}
