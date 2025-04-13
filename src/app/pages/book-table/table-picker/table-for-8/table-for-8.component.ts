import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';

@Component({
  selector: 'app-table-for-8',
  standalone: true,
  imports: [ChairComponent],
  templateUrl: './table-for-8.component.html',
  styleUrl: './table-for-8.component.css',
})
export class TableFor8Component {
  @Input() tableNo: number = 0;
}
