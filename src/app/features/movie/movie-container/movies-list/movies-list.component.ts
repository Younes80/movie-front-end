import { MovieService } from './../../../../shared/services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  @Input() public movies: Movie[] = [];
  public searchText = '';

  constructor() {}

  ngOnInit(): void {}
}
