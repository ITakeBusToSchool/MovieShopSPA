// Angular imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// third party library imports

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

// My imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './shared/components/movies-list/movies-list.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCrewComponent } from './admin/create-crew/create-crew.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { MyMovieComponent } from './account/my-movie/my-movie.component';
import { MyFavoriteComponent } from './account/my-favorite/my-favorite.component';

import { TopRevenueMoviesComponent } from './movies/top-revenue-movies/top-revenue-movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { MoviesByGenreComponent } from './movies/movies-by-genre/movies-by-genre.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { AuthenticationGuard } from './core/guards/authenticationGuard';
import { JwtModule } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent,
    LoginComponent,
    MoviesListComponent,
    CreateUserComponent,
    MyaccountComponent,
    CreateMovieComponent,
    CreateCrewComponent,
    CreateCastComponent,
    MyMovieComponent,
    MyFavoriteComponent,

    TopRevenueMoviesComponent,

    TopRatedMoviesComponent,

    HeaderComponent,

    FooterComponent,

    AboutUsComponent,

    MoviesByGenreComponent,

    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : () => {
          return localStorage.getItem("access_token");
        }
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
