import { FavoriteService } from './../../../shared/services/favorite.service';
import { MovieService } from './../../../shared/services/movie.service';
import { Subscription } from 'rxjs';
import { Movie } from './../../../shared/interfaces/movie.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-container',
  templateUrl: './favorite-container.component.html',
  styleUrls: ['./favorite-container.component.scss'],
})
export class FavoriteContainerComponent implements OnInit {
  public favorites: Movie[] | null = [];
  public subscription?: Subscription;
  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.subscription = this.favoriteService.favorites$.subscribe(
      (favorite: Movie[] | null) => {
        this.favorites = favorite;
      }
    );
  }
}
