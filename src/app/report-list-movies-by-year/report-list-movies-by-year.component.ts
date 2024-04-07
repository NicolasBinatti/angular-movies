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
    {id: 1, year: 1995, title: 'Shrek', winner: true},
    {id: 3, year: 2000, title: 'Shrek 2', winner: false},
    {id: 15, year: 2002, title: 'Shrek 3', winner: true},
    {id: 3, year: 2000, title: 'Shrek 2', winner: true},
    {id: 15, year: 2002, title: 'Shrek 3', winner: false},
    {id: 3, year: 2000, title: 'Shrek 2', winner: false},
    {id: 15, year: 2002, title: 'Shrek 3', winner: false},
    {id: 66, year: 2008, title: 'Shrek 4', winner: true},
  ]);

  displayedColumns: string[] = ['name', 'year', 'title']; // Colunas a serem exibidas na tabela
  filterValue: string = '';

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
