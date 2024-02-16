import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalysisService } from 'src/app/services/analysis.service';

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css'],
})
export class ShowresultComponent implements OnInit {
  AnalysisResult?: any;
  constructor(
    private analysisService: AnalysisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveAnalysisResult();
  }

  retrieveAnalysisResult(): void {
    this.analysisService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          this.AnalysisResult = res;
          console.log(this.AnalysisResult);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
}
