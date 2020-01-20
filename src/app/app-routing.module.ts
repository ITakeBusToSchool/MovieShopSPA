import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './login/login.component';
import { TopRevenueMoviesComponent } from './movies/top-revenue-movies/top-revenue-movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { MyFavoriteComponent } from './account/my-favorite/my-favorite.component';
import { MyMovieComponent } from './account/my-movie/my-movie.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCrewComponent } from './admin/create-crew/create-crew.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { MoviesByGenreComponent } from './movies/movies-by-genre/movies-by-genre.component';
import { AuthenticationGuard } from './core/guards/authenticationGuard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'topmovies', component:  TopRatedMoviesComponent },
  {path: 'toprevenue', component: TopRevenueMoviesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aboutus', component:  AboutUsComponent },
  {path: 'user/create', component: CreateUserComponent},
  {path: 'user/favorites', component: MyFavoriteComponent, canActivate:[AuthenticationGuard]},
  {path: 'user/purchase', component: MyMovieComponent, canActivate:[AuthenticationGuard]},
  {path: 'user/account', component: MyaccountComponent, canActivate:[AuthenticationGuard]},
  {path: 'admin/createmovie', component: CreateMovieComponent},
  {path: 'admin/createcrew', component: CreateCrewComponent},
  {path: 'admin/createcast', component: CreateCastComponent},
  {path: 'genres/:id', component: MoviesByGenreComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
