import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { SampleService } from 'src/app/services/sample.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserlabService } from 'src/app/services/userlab.service';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  patients: any[];
  samples: any[];
  userlabs: any[];
  loading = false;
  createForm: FormGroup;
  constructor(
    private patientService: PatientService,
    private sampleService: SampleService,
    private userlabService: UserlabService,
    private analysisService: AnalysisService
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
    // this.sampleService.getAll().subscribe({
    //   next: (res) => {
    //     this.patients = res;
    //   },
    //   error: (e) => {
    //     console.error(e);
    //   },
    //   complete: () => {},
    // });
    this.userlabService.getAll().subscribe({
      next: (res) => {
        this.userlabs = res;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
    this.createForm = new FormGroup({
      status: new FormControl('WAITING', Validators.required),
      startDate: new FormControl(
        new Date().toISOString().split('T')[0],
        Validators.required
      ),
      endDate: new FormControl(
        new Date().toISOString().split('T')[0],
        Validators.required
      ),
      IdUserLab: new FormControl('', Validators.required),
      IdAnalysisType: new FormControl('', Validators.required),
      IdPatient: new FormControl('', Validators.required),
      IdSample: new FormControl('', Validators.required),
    });
  }
  onPatientChange(event: any) {
    const selectedPatient = event.target.value;
    this.sampleService.getByPatientId(selectedPatient).subscribe({
      next: (res) => {
        this.samples = res;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
  }
  onSubmit(): void {
    if (this.createForm.valid) {
      this.loading = true;
      let startDate = this.createForm.get('startDate').value;

      if (!(startDate instanceof Date)) {
        startDate = new Date(startDate);
      }
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 7);

      const isoStartDate = startDate.toISOString();
      const isoEndDate = endDate.toISOString();

      const data = this.createForm.value;
      data.startDate = isoStartDate;
      data.endDate = isoEndDate;

      console.log(data);

      this.analysisService.create(data).subscribe({
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
