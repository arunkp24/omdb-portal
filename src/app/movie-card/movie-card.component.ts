import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { OmdbApiService } from '../services/omdb-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnDestroy {

  private apiSubscription: Subscription;
  @Input() movie: IMovie;
  @Input() selectedMovie: string;

  movieDetails: any;
  loading: boolean;

  @Output() callParent = new EventEmitter();

  constructor(private api: OmdbApiService) { }

  ngOnInit(): void {
  }

  // Get movie details
  getMovieDetails(movieId) {
    this.callParent.emit(this.selectedMovie);
    this.loading = true;
    this.apiSubscription = this.api.getMovie(movieId).subscribe((data: any) => {
        this.loading = false;
        this.movieDetails = data.Response === 'True' ? data : null;
    });
  }

  // Destroy the existing subscriptions
  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

}
