import { Injectable } from '@angular/core';
import { booking } from '../interfaces/booking.interface';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private bookings = new BehaviorSubject<booking[]>([
    { status: 'booked', tableNo: 8, time: 20, date: 16 },
    { status: 'progress', tableNo: 7, time: 20, date: 16 },
    { status: 'booked', tableNo: 7, time: 20, date: 17 },
    { status: 'booked', tableNo: 9, time: 20, date: 17 },
  ]);
  constructor() {}

  get(date: number) {
    return this.bookings
      .asObservable()
      .pipe(map((allBookings) => allBookings.filter((b) => b.date == date)));
  }

  set(time: number, status: string, tableNo: number, date: number) {
    const currentBokings = this.bookings.value;
    const existingBooking = currentBokings.find((b) => b.time == time);
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
