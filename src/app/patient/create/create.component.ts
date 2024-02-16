import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this.loading = true;
      const data = this.createForm.value;
      this.patientService.create(data).subscribe({
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
