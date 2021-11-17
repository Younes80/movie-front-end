import { User } from './../interfaces/user.interface';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, tap } from 'rxjs/Operators';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  private endpoint: string = 'http://localhost:8000/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser = {};

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(user: string): Observable<any> {
    console.log(user);
    return this.http
      .post(`${this.endpoint}/users`, user)
      .pipe(catchError(this.handleError));
  }

  public signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        let tokenInfo = this.getDecodedAccessToken(res.token!); // decode token
        this.getUserProfile(tokenInfo.id!).subscribe((res: any) => {
          this.currentUser = res[user.id!];
          this.router.navigate(['users/profile/']);
        });
      });
  }

  public getToken() {
    return localStorage.getItem('access_token');
  }
  public getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  public get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  public logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['users/login']);
    }
  }

  public fetchUsers(): Observable<User[]> {
    return this.http.get(`${this.endpoint}/users`).pipe(
      tap((users: any) => {
        this.user$.next(users);
      })
    );
  }

  public getUserProfile(id: number): Observable<any> {
    return this.http
      .get(`${this.endpoint}/users/${id}`, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }
}
