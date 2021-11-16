import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './user-container/signin/signin.component';
import { SignupComponent } from './user-container/signup/signup.component';
import { UserProfileComponent } from './user-container/user-profile/user-profile.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      { path: 'login', component: SigninComponent },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
