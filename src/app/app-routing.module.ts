import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { AddEditReviewComponent } from './reviews/add-edit-review/add-edit-review.component';
import { MovieReviewsComponent } from './movies/movie-reviews/movie-reviews.component';
import { SingleMovieComponent } from './movies/single-movie/single-movie.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies/new',
    component: NewMovieComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies/:id',
    component: SingleMovieComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies/:id/reviews',
    component: MovieReviewsComponent,
    pathMatch: 'full'
  },
  {
    path: 'reviews/:id/new',
    component: AddEditReviewComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
