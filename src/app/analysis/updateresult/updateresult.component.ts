import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-updateresult',
  templateUrl: './updateresult.component.html',
  styleUrls: ['./updateresult.component.css'],
})
export class UpdateresultComponent implements OnInit {
  currentAnalysis: any;
  formGroups: FormGroup[] = [];
  loading = false;

  constructor(
    private analysisService: AnalysisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.analysisService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.currentAnalysis = data;
          for (let i = 0; i < this.currentAnalysis.testsDTO.length; i++) {
            const formGroup = new FormGroup({
              idtest: new FormControl(this.currentAnalysis.testsDTO[i].id),
              valuetest: new FormControl(
                this.currentAnalysis.testsDTO[i].resultTest === null
                  ? ''
                  : this.currentAnalysis.testsDTO[i].resultTest
              ),
            });
            this.formGroups.push(formGroup);
          }
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }

  onSave(index: number): void {
    const formGroup = this.formGroups[index];
    if (formGroup.valid) {
      this.loading = true;
      const id = formGroup.value.idtest;
      const value = formGroup.value.valuetest;
      this.analysisService.setTest(id, value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          this.loading = false;
        },
      });
    } else {
      // Handle invalid form
      console.log(`Form at index ${index} is invalid.`);
    }
  }
}
