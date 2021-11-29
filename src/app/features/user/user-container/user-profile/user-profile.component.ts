import { User } from './../../../../shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public currentUser!: User;
  public res = localStorage.getItem('access_token');
  public loading$ = this.loadingService.loading$;

  constructor(
    public authService: AuthService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    let tokenInfo = this.authService.getDecodedAccessToken(this.res!); // decode token
    this.authService.getUserProfile(tokenInfo.id).subscribe((res: User) => {
      this.currentUser = res;
      this.authService.getToken();
    });
  }
}
