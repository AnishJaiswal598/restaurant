import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';

@Component({
  selector: 'app-table-for-4',
  standalone: true,
  imports: [ChairComponent],
  templateUrl: './table-for-4.component.html',
  styleUrl: './table-for-4.component.css',
})
export class TableFor4Component {
  @Input() tableNo: number = 0;
}
