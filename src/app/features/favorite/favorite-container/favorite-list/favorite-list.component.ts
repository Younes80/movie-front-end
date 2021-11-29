import { FavoriteService } from './../../../../shared/services/favorite.service';
import { Movie } from './../../../../shared/interfaces/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  @Input() public favorites: Movie[] | null = [];
  faTimes = faTimes;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  public removeFavorite(removeFavorite: number): void {
    const currentValue = this.favoriteService.favorites$.getValue();
    currentValue.forEach((item, index) => {
      if (index === removeFavorite) currentValue.splice(index, 1);
    });
    this.favoriteService.favorites$.next(currentValue);
  }
}
