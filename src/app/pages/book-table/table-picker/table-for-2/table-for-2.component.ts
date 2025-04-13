import { Component, Input } from '@angular/core';
import { ChairComponent } from '../chair/chair.component';

@Component({
  selector: 'app-table-for-2',
  standalone: true,
  imports: [ChairComponent],
  templateUrl: './table-for-2.component.html',
  styleUrl: './table-for-2.component.css',
})
export class TableFor2Component {
  @Input() tableNo: number = 0;
  tableClick = () => {
    console.log('table Clicked');
  };
}
