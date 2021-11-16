import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  // { path: '', redirectTo: '/users/login', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./features/movie/movie.module').then((m) => m.MovieModule),
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./features/favorite/favorite.module').then(
        (m) => m.FavoriteModule
      ),
  },
  // { path: '**', redirectTo: '1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
