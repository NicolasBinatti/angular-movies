import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  async getMoviesList(title: string | null, year?: number | null, winner?: boolean | null): Promise<any> {
    let endpoint: string = environment.apiUrl + 'movies';
    let params = new HttpParams();

    if (title) {
      params = params.append('winner', title.toString());
    }
    if (year) {
      params = params.append('year', year.toString());
    }
    if (winner) {
      params = params.append('winner', winner.toString());
    }

    return this.http.get<any>(endpoint, {params}).toPromise();

  }
}
