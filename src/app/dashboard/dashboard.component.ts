import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCardModule} from '@angular/material/card';
import {ReportListWinnersComponent} from "../report-list-winners/report-list-winners.component";
import {ReportTopThreeComponent} from "../report-top-three/report-top-three.component";
import {ReportListMoviesByYearComponent} from "../report-list-movies-by-year/report-list-movies-by-year.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatCardModule,
    ReportListWinnersComponent,
    ReportTopThreeComponent,
    ReportListMoviesByYearComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
