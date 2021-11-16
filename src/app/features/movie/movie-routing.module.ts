import { AuthGuard } from './../../shared/guard/auth.guard';
import { MovieFormComponent } from './movie-container/movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-container/movie-details/movie-details.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MovieContainerComponent,

    children: [
      { path: 'new', component: MovieFormComponent, canActivate: [AuthGuard] },
      {
        path: ':index/edit',
        component: MovieFormComponent,
        canActivate: [AuthGuard],
      },
      { path: ':index', component: MovieDetailsComponent },
      { path: '**', redirectTo: '1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
