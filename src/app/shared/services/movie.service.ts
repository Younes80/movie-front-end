import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/Operators';
import { Movie } from '../interfaces/movie.interface';

const configUrl = 'http://localhost:8000/api/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) {}

  public getMovie(id: number): Observable<Movie> {
    return this.movies$.pipe(
      filter((movies: Movie[]) => movies !== null),
      map((movies: Movie[]) => movies[id])
    );
  }

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(configUrl, movie).pipe(
      tap((savedMovie: Movie) => {
        this.movies$.next([...this.movies$.value, savedMovie]);
      })
    );
  }

  public editMovie(movieId: number, editedMovie: Movie): Observable<Movie> {
    return this.http.patch<Movie>(`${configUrl}/${movieId}`, editedMovie).pipe(
      tap((saveMovie: Movie) => {
        this.movies$.next(
          this.movies$.value.map((movie: Movie) => {
            if (movie.name === saveMovie.name) {
              return editedMovie;
            } else {
              return movie;
            }
          })
        );
      })
    );
  }

  public fetchMovies(): Observable<Movie[]> {
    return this.http.get(configUrl).pipe(
      tap((movies: any) => {
        this.movies$.next(movies);
      })
    );
  }
}
