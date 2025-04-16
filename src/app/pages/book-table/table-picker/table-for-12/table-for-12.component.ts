import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';

@Component({
  selector: 'app-table-for-12',
  standalone: true,
  imports: [ChairComponent],
  templateUrl: './table-for-12.component.html',
  styleUrl: './table-for-12.component.css',
})
export class TableFor12Component {
  @Input() tableNo: number = 0;
  @Input() currentStatus: string = 'available';
}
