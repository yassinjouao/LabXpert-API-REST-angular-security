import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { SampleService } from 'src/app/services/sample.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-createsample',
  templateUrl: './createsample.component.html',
  styleUrls: ['./createsample.component.css'],
})
export class CreatesampleComponent implements OnInit {
  // private cdr: ChangeDetectorRef;

  createForm: FormGroup;
  patients: Patient[];
  loading = false;
  constructor(
    private patientService: PatientService,
    private sampleService: SampleService
  ) {}

  ngOnInit(): void {
    this.patientService.getAll().subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
    this.createForm = new FormGroup({
      type: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      idPatient: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this.loading = true;
      this.createForm.get('date').value;
      const data = this.createForm.value;
      data.date = new Date(data.date).toISOString();
      this.sampleService.create(data).subscribe({
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
