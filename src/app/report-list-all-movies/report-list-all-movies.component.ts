import {Component, ViewChild, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator} from '@angular/material/paginator';
import {Movies} from "../interfaces/movies.interface";
import {MoviesService} from "../services/movies.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-report-list-all-movies',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatSelect,
    MatOption,
    MatGridList,
    MatGridTile,
    MatPaginator,
    NgIf,
  ],
  templateUrl: './report-list-all-movies.component.html',
  styleUrl: './report-list-all-movies.component.scss'
})
export class ReportListAllMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) {
  }

  filter = {
    title: null,
    year: null,
    winner: null
  };

  table = {
    data : new MatTableDataSource<Movies>([]),
    headers: ['id', 'year', 'title', 'winner']

  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | null = null;

  async ngOnInit() {
    await this.moviesService.getMoviesList()
    this.table.data.data = this.moviesService.movieList

    if (this.paginator) {
      this.table.data.paginator = this.paginator;
    }
  }



  applyFilter() {
    this.table.data.filterPredicate = (data, filter) => {
      const filterObject = JSON.parse(filter);
      let yearMatch = true;
      let titleMatch = true;
      let winnerMatch = true;

      if (filterObject.year) {
        yearMatch = data.year.toString().includes(filterObject.year);
      }

      if (filterObject.title) {
        titleMatch = data.title.toLowerCase().includes(filterObject.title.toLowerCase());
      }

      if (filterObject.winner !== null && filterObject.winner !== undefined) {
        winnerMatch = data.winner === filterObject.winner;
      }

      return yearMatch && titleMatch && winnerMatch;
    };

    this.table.data.filter = JSON.stringify(this.filter);

    if (this.table.data.paginator) {
      this.table.data.paginator.firstPage();
    }
  }
}

