import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environment";
import {Movies} from "../interfaces/movies.interface";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  movieList: Movies[];

  constructor(private http: HttpClient) {
    this.movieList = [];
  }

  async getMoviesList() {
    return this.http.get<any>(environment.apiUrl + 'movies')
      .subscribe(data => {
        this.movieList = data
      })
  }
}
