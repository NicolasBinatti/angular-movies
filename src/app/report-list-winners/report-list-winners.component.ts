import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  year: number;
  count: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {year: 1994, count: 2},
  {year: 1991, count: 2},
  {year: 1995, count: 1}
];

@Component({
  selector: 'app-report-list-winners',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './report-list-winners.component.html',
  styleUrl: './report-list-winners.component.scss'
})

export class ReportListWinnersComponent {
  displayedColumns: string[] = ['year', 'count'];
  dataSource = ELEMENT_DATA;
}
