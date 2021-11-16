import { MovieService } from './shared/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies().subscribe();
  }
}
