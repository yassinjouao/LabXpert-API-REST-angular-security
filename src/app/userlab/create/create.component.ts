import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserlabService } from 'src/app/services/userlab.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  constructor(private userlabService: UserlabService) {}

  // on init
  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      information: new FormControl('', [Validators.required]),
      userRole: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
  // to submit form
  onSubmit(): void {
    if (this.createForm.valid) {
      this.loading = true;
      const data = this.createForm.value;
      this.userlabService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.createForm.reset();
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
