import { User } from './../../../../shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public currentUser?: User;
  public res = localStorage.getItem('access_token');

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    let tokenInfo = this.authService.getDecodedAccessToken(this.res!); // decode token
    this.authService.getUserProfile(tokenInfo.id).subscribe((res) => {
      this.currentUser = res;
      this.authService.getToken();
    });
  }
}
