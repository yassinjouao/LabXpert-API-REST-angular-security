import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css'],
})
export class AdminTemplateComponent implements OnInit {
  username: string;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
