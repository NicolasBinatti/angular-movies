import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Period {
  producer: string;
  interval: number;
  previous_year: number;
  following_year: number;
}

@Component({
  selector: 'app-report-interval-wins',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './report-interval-wins.component.html',
  styleUrl: './report-interval-wins.component.scss'
})
export class ReportIntervalWinsComponent {
  displayedColumns: string[] = ['producer', 'interval', 'previous_year', 'following_year'];

  data_maximum = [{producer: "Matthew Vaughn", interval: 13, previus_year: 2002, following_year: 2015}];
  data_minimum = [{producer: "Jorel Silver", interval: 1, previus_year: 1990, following_year: 1991}];
}
