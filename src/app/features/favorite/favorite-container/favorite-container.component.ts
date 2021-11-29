import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FavoriteService } from './../../../shared/services/favorite.service';
import { MovieService } from './../../../shared/services/movie.service';
import { Subscription } from 'rxjs';
import { Movie } from './../../../shared/interfaces/movie.interface';
import { Component, OnInit } from '@angular/core';
import { concatMap, map, tap } from 'rxjs/Operators';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-favorite-container',
  templateUrl: './favorite-container.component.html',
  styleUrls: ['./favorite-container.component.scss'],
})
export class FavoriteContainerComponent implements OnInit {
  public favorites: Movie[] | null = [];
  public subscription?: Subscription;
  public favoriteId?: number;
  constructor(
    private favoriteService: FavoriteService,
    private authService: AuthService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    const tokenInfo = this.authService.getDecodedAccessToken(token!); // decode token

    this.favoriteService
      .getFavoriteByUser(tokenInfo.id)
      .pipe(
        tap((user: any) => {
          user.favorite!.map((favId: any) => {
            this.favoriteId = favId.replace('/api/movies/', '');
            user.favorite = this.favoriteId;
            this.movieService
              .getMovie(this.favoriteId! - 1)
              .pipe(
                map((favorite: Movie) => {
                  this.favorites = [favorite];
                  console.log(this.favorites);
                })
              )
              .subscribe();
          });
        })
      )
      .subscribe();
  }
}
