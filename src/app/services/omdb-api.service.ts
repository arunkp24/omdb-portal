import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private URL = env.API_ENDPOINT + '?apikey=' + env.API_KEY;
  constructor(private httpClient: HttpClient) { }

  getMovieCards(searchTerm: string) {
    return this.httpClient.get(`${this.URL}&s=${searchTerm}`);
  }

  getMovie(id: string) {
    return this.httpClient.get(`${this.URL}&i=${id}`);
  }
}
