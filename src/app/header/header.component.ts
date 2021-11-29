import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false;

  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  public logout(): void {
    this.authService.logout();
  }

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
