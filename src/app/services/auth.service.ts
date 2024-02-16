import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;

  constructor(private http: HttpClient) {}
  public login(username: string, password: string) {
    console.log('f');

    let loginForm = { username, password };
    return this.http.post('http://localhost:8080/auth/signin', loginForm);
  }

  loadProfile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['accessToken'];
    let decodedJwt = jwtDecode(this.accessToken);
    this.username = data['username'];
    this.roles = data['roles'];
    window.localStorage.setItem('jwt-token', this.accessToken);
    window.localStorage.setItem('roles', this.roles);
    window.localStorage.setItem('username', this.username);
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.setItem('jwt-token', '');
    window.localStorage.setItem('roles', '');
    window.localStorage.setItem('username', '');
  }

  loadJwtTokenFromLocalStorage() {
    let accessToken = window.localStorage.getItem('jwt-token');
    let roles: Array<string> = [];
    roles.push(window.localStorage.getItem('roles'));
    let username = window.localStorage.getItem('username');
    let data = { accessToken, username, roles };
    if (accessToken) {
      this.loadProfile(data);
    }
  }
}
