import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Userlab } from 'src/app/models/userlab.model';
import { UserlabService } from 'src/app/services/userlab.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  currentUser: Userlab;
  updateForm: FormGroup;
  viewMode: boolean;
  loading = false;
  constructor(
    private userlabService: UserlabService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // on init
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.viewMode = queryParams['viewMode'] === 'true';
    });
    this.userlabService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          this.updateForm = new FormGroup({
            id: new FormControl(this.currentUser.id),
            name: new FormControl(
              { value: this.currentUser.name, disabled: this.viewMode },
              Validators.required
            ),
            information: new FormControl(
              { value: this.currentUser.information, disabled: this.viewMode },
              [Validators.required]
            ),
            userRole: new FormControl(
              { value: this.currentUser.userRole, disabled: this.viewMode },
              Validators.required
            ),
            status: new FormControl(
              { value: this.currentUser.status, disabled: this.viewMode },
              Validators.required
            ),
          });
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  // to update form
  onSubmit(): void {
    if (this.updateForm.valid) {
      this.loading = true;
      const data = this.updateForm.value;
      this.userlabService.update(this.currentUser.id, data).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/userlab/index']);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
