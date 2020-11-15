import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { OmdbApiService } from '../services/omdb-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private storeSubscription: Subscription;
  private apiSubscription: Subscription;
  movies: IMovie[];
  selectedMovie: string;
  errorMessage: string;

  constructor(private api: OmdbApiService, private store: Store<{ search: string }>) {
    // Get the searched key from store
    this.storeSubscription = store.select('search').subscribe(searchKeyword => {
      if (searchKeyword) {
        // Get the movies from OMDB API
        this.apiSubscription = this.api.getMovieCards(searchKeyword).subscribe((data: any) => {
          if (data.Response === 'True') {
            this.movies = data.Search;
          } else {
            this.movies = [];
            this.errorMessage = data.Error;
          }
        });
      } else {
        this.movies = null;
      }
    });
  }

  ngOnInit(): void {
  }

  // Get the selected movie from movie-card component
  getSelectedMovie($event) {
    this.selectedMovie = $event;
  }

  // Destroy all subscriptions
  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
    this.apiSubscription.unsubscribe();
  }

}
