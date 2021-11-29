import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { filter, map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public endpoint = 'http://localhost:8000/api';
  public favorites$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
    []
  );
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private authService: AuthService) {}

  public addToFavorite(addFavorite: Movie): void {
    if (this.favorites$.value) {
      this.favorites$.next([...this.favorites$.value, addFavorite]);
    }

    const movieId = addFavorite.id;

    const token = localStorage.getItem('access_token');
    const tokenInfo = this.authService.getDecodedAccessToken(token!); // decode token

    const fI: any = {
      favorite: [`api/movies/${movieId}`],
    };
    const favoriteInfo = fI;

    this.http
      .post<any>(
        `${this.endpoint}/posts/${tokenInfo.id}/favorite`,
        favoriteInfo
      )
      .subscribe();
  }

  public getFavoriteByUser(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.endpoint}/users/${id}`, {
      headers: this.headers,
    });
  }

  public getFavorite(id: number): Observable<Movie> {
    return this.favorites$.pipe(
      filter((favorites: Movie[]) => favorites !== null),
      map((favorites: Movie[]) => favorites[id])
    );
  }
}
