import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './user-container/signin/signin.component';
import { SignupComponent } from './user-container/signup/signup.component';
import { UserProfileComponent } from './user-container/user-profile/user-profile.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserRoutingModule } from './user-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UserContainerComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
    MatProgressSpinnerModule,
  ],
})
export class UserModule {}
