import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieDetails: any;

  constructor() { }

  ngOnInit(): void {
  }

}
