import {Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule} from "@angular/forms";
import {Movies} from "../interfaces/movies.interface";

@Component({
  selector: 'app-report-list-movies-by-year',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatTableModule, FormsModule],
  templateUrl: './report-list-movies-by-year.component.html',
  styleUrl: './report-list-movies-by-year.component.scss'
})

export class ReportListMoviesByYearComponent {
  dataSource = new MatTableDataSource<Movies>([
    {id: 1, year: 1995, title: 'Mommie Dearest', winner: true},
    {id: 80, year: 1986, title: 'Howard the Duck', winner: true},
    {id: 79, year: 1985, title: 'Rambo: First Blood Part II', winner: true},
    {id: 123, year: 1989, title: 'Star Trek V: The Final Frontier', winner: true},
  ]);

  displayedColumns: string[] = ['name', 'year', 'title']; // Colunas a serem exibidas na tabela
  filterValue: string = '';

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
