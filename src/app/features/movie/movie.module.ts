import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-container/movie-details/movie-details.component';
import { MoviesListComponent } from './movie-container/movies-list/movies-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieFormComponent } from './movie-container/movie-form/movie-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MovieContainerComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    FilterPipe,
    MovieFormComponent,
    MovieFormComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class MovieModule {}
