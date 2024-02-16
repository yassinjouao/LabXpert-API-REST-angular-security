import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  patients?: Patient[];

  constructor(private patientService: PatientService) {}
  ngOnInit(): void {
    this.retrievePatients();
  }
  retrievePatients(): void {
    this.patientService.getAll().subscribe({
      next: (data) => {
        this.patients = data;
        console.log(data);
      },
      error: (e) => console.log(e),
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
}
