import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-top-revenue-movies',
  templateUrl: './top-revenue-movies.component.html',
  styleUrls: ['./top-revenue-movies.component.css']
})
export class TopRevenueMoviesComponent implements OnInit {

  movies:Movie[];
  constructor(private movieservice:MovieService ) { }

  ngOnInit() {
    this.movieservice.getTop20Movies()
    .subscribe(
        m=>{ this.movies=m;
        console.log(this.movies);
        }
    );
  }
  // export class GenresComponent implements OnInit {

  //   genres: Genre[];
  //   //the genres is set as private object 
  //   constructor(private genresrveice: GenreService) { }
  
  //   ngOnInit() {
  //     this.genresrveice.getAllGenres()
  //     .subscribe(
  //       g => { this.genres = g;
  //       console.log(this.genres);
  //       console.table(this.genres); }
  
  //     );
  //   }
}
