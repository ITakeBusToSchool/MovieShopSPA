import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }
  getTop20Movies():Observable<Movie[]>{
    return this.apiService.getAll('/movie');
  }
  // getAllGenres(): Observable<Genre[]> {
  //   return this.apiService.getAll('/genres');
  // }

  // constructor(private apiService: ApiService) { }
  // getAllGenres(): Observable<Genre[]> {
  //   return this.apiService.getAll('/genres');
  // }
}
