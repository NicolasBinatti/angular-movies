import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-report-top-three',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './report-top-three.component.html',
  styleUrl: './report-top-three.component.scss'
})
export class ReportTopThreeComponent {
  displayedColumns: string[] = ['name', 'count'];
  dataSource = [
    {name: "Paramount Pictures", count: 6},
    {name: "Columbia Pictures", count: 6},
    {name: "Warner Bros.", count: 5},
  ];

}
