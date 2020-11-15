import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.scss']
})
export class MovieRatingsComponent implements OnInit {

  @Input() ratings: any;
  constructor() { }

  ngOnInit(): void {
  }

}
