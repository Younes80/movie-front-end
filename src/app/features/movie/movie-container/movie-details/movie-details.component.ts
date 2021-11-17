import { FavoriteService } from './../../../../shared/services/favorite.service';
import { MovieService } from './../../../../shared/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  public movie!: Movie;
  faHeart = faHeart;

  constructor(
    private movieService: MovieService,
    private favoriteService: FavoriteService,
    private activedRoute: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: any) => {
      this.movieService
        .getMovie(+params.index - 1)
        .subscribe((movie: Movie) => {
          this.movie = movie;
        });
    });
  }

  public addFavorite(): void {
    this.favoriteService.addToFavorite(this.movie);
  }
}
