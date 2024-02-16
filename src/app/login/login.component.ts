import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('admin', Validators.required),
      password: new FormControl('12345678', Validators.required),
    });
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        console.log(data);
        this.authService.loadProfile(data);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
