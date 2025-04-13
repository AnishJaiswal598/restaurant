import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';

@Component({
  selector: 'app-table-for-6',
  standalone: true,
  imports: [ChairComponent],
  templateUrl: './table-for-6.component.html',
  styleUrl: './table-for-6.component.css',
})
export class TableFor6Component {
  @Input() tableNo: number = 0;
}
