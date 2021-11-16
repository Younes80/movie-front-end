import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteContainerComponent } from './favorite-container/favorite-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-container/favorite-list/favorite-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FavoriteContainerComponent, FavoriteListComponent],
  imports: [CommonModule, FavoriteRoutingModule, FontAwesomeModule],
})
export class FavoriteModule {}
