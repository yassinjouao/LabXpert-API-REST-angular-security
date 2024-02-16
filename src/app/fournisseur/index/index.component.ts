import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  fournisseurs?: Fournisseur[];
  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void {
    this.retrieveProviders();
  }
  retrieveProviders(): void {
    this.fournisseurService.getAll().subscribe({
      next: (data) => {
        this.fournisseurs = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  getStatusClass(statusProvider: string): string {
    switch (statusProvider) {
      case 'ACTIVE':
        return 'active-color';
      case 'INACTIVE':
        return 'inactive-color';
      default:
        return '';
    }
  }
}
