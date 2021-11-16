import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  public logout(): void {
    this.authService.logout();
  }
}
