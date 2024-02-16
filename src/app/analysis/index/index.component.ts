import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  Analysis?: any[];

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.retrieveAnalysis();
  }

  retrieveAnalysis(): void {
    this.analysisService.getAll().subscribe({
      next: (data) => {
        this.Analysis = data;
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
