import { Component, Input } from '@angular/core';
import { BookingChairDirective } from '../../../../directives/booking-chair.directive';

@Component({
  selector: 'app-chair',
  standalone: true,
  imports: [BookingChairDirective],
  templateUrl: './chair.component.html',
  styleUrl: './chair.component.css',
})
export class ChairComponent {
  @Input() availableStatus: string = 'available';
}
