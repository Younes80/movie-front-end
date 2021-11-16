import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public favorites$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
    []
  );

  constructor() {}

  public addToFavorite(addFavorite: Movie): void {
    const currentValue = this.favorites$.value;
    if (currentValue) {
      const obj = [...currentValue, addFavorite];
      this.favorites$.next(obj);
    } else {
      console.log('error');
    }
  }
}
