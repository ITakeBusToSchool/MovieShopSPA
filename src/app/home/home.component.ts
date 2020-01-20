import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:Movie[];
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
    this.movieservice.getTop20Movies().
    subscribe(
      m=>{this.movies=m;
        console.log(this.movies);      
      }
      );  
    }
    movieFavorited(movie :Movie)
    {
        //Call api o save movie favorited
        console.log(movie);
    }    
    moviePurchase(movie : Movie)
    {
      console.log(movie);
    }
  
  
  
  
  
  
  // movies:Movie[];
  // constructor(private movieservice:MovieService ) { }

  // ngOnInit() {
  //   this.movieservice.getTop20Movies()
  //   .subscribe(
  //       m=>{ this.movies=m;
  //       console.log(this.movies);
  //       }
  //   );
}
