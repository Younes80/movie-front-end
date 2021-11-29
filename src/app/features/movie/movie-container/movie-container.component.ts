import { LoadingService } from './../../../shared/services/loading.service';
import { MovieService } from './../../../shared/services/movie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss'],
})
export class MovieContainerComponent implements OnInit, OnDestroy {
  public movies$: Movie[] = [];
  public subscription: Subscription = new Subscription();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.movieService.movies$.subscribe((movies: Movie[]) => {
        this.movies$ = movies;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
