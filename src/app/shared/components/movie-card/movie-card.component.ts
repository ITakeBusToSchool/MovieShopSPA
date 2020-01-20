import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() favoriteEvent = new EventEmitter<Movie>();
  @Output() purchaseEvent = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
   }
  favoriteClicked(movie: Movie) {
    this.favoriteEvent.emit(movie);
  }
  buyMovieClicked(movie: Movie) {
    this.purchaseEvent.emit(movie);
    }
  }
  // movies:Movie[];
  // constructor(private movieservice:MovieService) { }

  // ngOnInit() {
  //   this.movieservice.getTop20Movies().
  //   subscribe(
  //     m=>{this.movies=m;
  //       console.log(this.movies);
  //     }
  //     );
  //   }

