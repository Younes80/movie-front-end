import { MovieService } from './../../../../shared/services/movie.service';
import { Movie } from './../../../../shared/interfaces/movie.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/Operators';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  public movie?: Movie;
  public movieForm: FormGroup = this.initForm();

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.movieService
          .getMovie(+index - 1)
          .pipe(first())
          .subscribe((movie: Movie) => {
            this.movie = movie;
            this.movieForm = this.initForm(this.movie);
          });
      }
    });
  }

  private initForm(
    movie: Movie = {
      id: null,
      name: '',
      releaseDate: '',
      duration: '',
      img: '',
      description: '',
    }
  ): FormGroup {
    return this.fb.group({
      name: [movie.name, Validators.required],
      releaseDate: [movie.releaseDate, Validators.required],
      duration: [movie.duration, Validators.required],
      img: [movie.img, Validators.required],
      description: [movie.description, Validators.required],
    });
  }

  public submit(): void {
    if (this.movie) {
      this.movieService
        .editMovie(this.movie.id!, this.movieForm.value)
        .subscribe();
    } else {
      this.movieService.addMovie(this.movieForm.value).subscribe();
    }

    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
