import { Injectable } from '@angular/core';
import { booking } from '../interfaces/booking.interface';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private bookings = new BehaviorSubject<booking[]>([
    { status: 'booked', tableNo: 1, time: 21, date: 17 },
    { status: 'booked', tableNo: 2, time: 22, date: 17 },
    { status: 'booked', tableNo: 7, time: 22, date: 18 },
    { status: 'booked', tableNo: 9, time: 23, date: 18 },
  ]);
  constructor() {}

  get(date: number): Observable<booking[]> {
    return this.bookings.asObservable().pipe(
      map((allBookings: booking[]) => {
        return allBookings.filter((b) => b.date == date);
      })
    );
  }

  set(time: number, status: string, tableNo: number, date: number) {
    const currentBokings = this.bookings.value;
    const existingBooking = currentBokings.find(
      (b) => b.time == time && b.date == date && b.tableNo == tableNo
    );
    if (existingBooking) {
      existingBooking.status = status;
    } else {
      currentBokings.push({
        time: time,
        status: status,
        tableNo: tableNo,
        date: date,
      });
    }
    this.bookings.next(currentBokings);
  }
}
