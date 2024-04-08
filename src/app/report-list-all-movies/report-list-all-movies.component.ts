import {Component, OnInit, ViewChild} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator} from '@angular/material/paginator';
import {Movies} from "../interfaces/movies.interface";
import {MoviesService} from "../services/movies.service";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

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
    MatButton,
  ],
  templateUrl: './report-list-all-movies.component.html',
  styleUrl: './report-list-all-movies.component.scss'
})
export class ReportListAllMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) {
  }

  filter = {
    year: null,
    winner: null
  };

  table = {
    data: new MatTableDataSource<Movies>([]),
    headers: ['id', 'year', 'title', 'winner']
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | null = null;

  ngOnInit() {
    this.applyFilter()
  }

  async applyFilter() {
    try {
      this.table.data.data = await this.moviesService.getMoviesList(this.filter.year,this.filter.winner);

      if (this.paginator) {
        this.table.data.paginator = this.paginator;
      }
      this.table.data.paginator = this.paginator;

      if (this.table.data.paginator) {
        this.table.data.paginator.firstPage();
      }
    } catch (error) {
      console.error('Fail to get movies list:', error);
    }

  }
}

