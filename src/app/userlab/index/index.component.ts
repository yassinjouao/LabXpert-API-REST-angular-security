import { Component, OnInit } from '@angular/core';
import { Userlab } from 'src/app/models/userlab.model';
import { UserlabService } from 'src/app/services/userlab.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  userlabs?: Userlab[];
  constructor(private userlabService: UserlabService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.userlabService.getAll().subscribe({
      next: (data) => {
        this.userlabs = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  getStatusClass(statusUser: string): string {
    switch (statusUser) {
      case 'ACTIVE':
        return 'active-color';
      case 'INACTIVE':
        return 'inactive-color';
      default:
        return '';
    }
  }
  updateStatus(id: any, status: string): void {
    switch (status) {
      case 'ACTIVE':
        this.userlabService.disable(id).subscribe({
          next: (data) => {
            console.log(data);
            this.retrieveUsers();
          },
          error: (e) => console.error(e),
        });
        break;
      case 'INACTIVE':
        this.userlabService.enable(id).subscribe({
          next: (data) => {
            console.log(data);
            this.retrieveUsers();
          },
          error: (e) => console.error(e),
        });
        break;
      default:
        break;
    }
  }
}
