import { User } from './../../../../shared/interfaces/user.interface';
import { FavoriteService } from './../../../../shared/services/favorite.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() public movie!: Movie;
  public user!: User;
  public currentUser!: User;
  faHeart = faHeart;

  constructor(
    // private movieService: MovieService,
    private favoriteService: FavoriteService,
    // private activedRoute: ActivatedRoute,
    public authService: AuthService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    // this.activedRoute.params.subscribe((params: any) => {
    //   this.movieService
    //     .getMovie(+params.index - 1)
    //     .subscribe((movie: Movie) => {
    //       this.movie = movie;
    //     });
    // });
  }

  public addFavorite(): void {
    this.favoriteService.addToFavorite(this.movie);
  }
}
