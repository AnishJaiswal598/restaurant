import { Component } from '@angular/core';
import { TableFor2Component } from './table-for-2/table-for-2.component';
import { TableFor4Component } from './table-for-4/table-for-4.component';
import { TableFor6Component } from './table-for-6/table-for-6.component';
import { TableFor12Component } from './table-for-12/table-for-12.component';
import { TableFor8Component } from './table-for-8/table-for-8.component';

@Component({
  selector: 'app-table-picker',
  standalone: true,
  imports: [
    TableFor2Component,
    TableFor4Component,
    TableFor6Component,
    TableFor12Component,
    TableFor8Component,
  ],
  templateUrl: './table-picker.component.html',
  styleUrl: './table-picker.component.css',
})
export class TablePickerComponent {}
