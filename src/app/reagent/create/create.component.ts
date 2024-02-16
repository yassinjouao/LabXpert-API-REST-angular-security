import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReagentService } from 'src/app/services/reagent.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  reactifForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private fournisseurService: FournisseurService,
    private reactifService: ReagentService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fournisseurService.getAll().subscribe(
      (data) => {
        this.fournisseurs = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.initForm();
  }
  initForm(): void {
    this.reactifForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      fournisseurIdFournisseur: [null, Validators.required],
      price: new FormControl('', Validators.required),
      quantite: [1, [Validators.required, Validators.min(1)]],
      dateExpiration: ['', Validators.required],
    });
  }
  onSubmit() {
    const formData = this.reactifForm.value;
    const dateTimeExpirationValue = this.datePipe.transform(
      formData.dateExpiration,
      'yyyy-MM-ddTHH'
    );
    const fournisseurIdFournisseurValue = parseInt(
      formData.fournisseurIdFournisseur
    );

    const modifiedFormData = {
      nom: formData.nom,
      description: formData.description,
      fournisseurIdFournisseur: fournisseurIdFournisseurValue,
      quantite: formData.quantite,
      dateExpiration: dateTimeExpirationValue,
    };

    this.reactifService.create(modifiedFormData).subscribe(
      (response) => {
        console.log('Données du réactif envoyées avec succès', response);
        this.router.navigate(['reactif/all']);
      },
      (error) => {
        if (error.status === 400) {
          const errorMessage = error.error.message;
          console.log("Message d'erreur :", errorMessage);
          this.errorMessage = errorMessage;
        }
      }
    );
  }
}
