import { MovieDetailsComponent } from 'src/app/features/movie/movie-container/movie-details/movie-details.component';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  @Input() public movies: Movie[] = [];
  public searchText = '';
  public loading$ = this.loadingService.loading$;

  constructor(
    private modalService: NgbModal,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  open(id: number) {
    const modalRef = this.modalService.open(MovieDetailsComponent);
    modalRef.componentInstance.movie = this.movies[id - 1];
    // console.log((modalRef.componentInstance.movie = this.movies[id - 1]));
  }
}
