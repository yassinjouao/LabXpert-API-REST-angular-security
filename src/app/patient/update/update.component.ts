import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  currentPatient: Patient;
  updateForm: FormGroup;
  viewMode: boolean;
  loading = false;

  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.viewMode = queryParams['viewMode'] === 'true';
    });
    this.patientService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.currentPatient = data;
          this.updateForm = new FormGroup({
            id: new FormControl(this.currentPatient.id),
            firstname: new FormControl(
              {
                value: this.currentPatient.firstname,
                disabled: this.viewMode,
              },
              Validators.required
            ),
            lastname: new FormControl(
              {
                value: this.currentPatient.lastname,
                disabled: this.viewMode,
              },
              Validators.required
            ),
            dateOfBirth: new FormControl(
              {
                value: this.currentPatient.dateOfBirth,
                disabled: this.viewMode,
              },
              Validators.required
            ),
            sex: new FormControl(
              {
                value: this.currentPatient.sex,
                disabled: this.viewMode,
              },
              Validators.required
            ),
            phone: new FormControl(
              {
                value: this.currentPatient.phone,
                disabled: this.viewMode,
              },
              Validators.required
            ),
            status: new FormControl(
              { value: this.currentPatient.status, disabled: this.viewMode },
              Validators.required
            ),
          });
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  onSubmit(): void {
    if (this.updateForm.valid) {
      this.loading = true;
      const data = this.updateForm.value;
      this.patientService.update(this.currentPatient.id, data).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patient/index']);
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
