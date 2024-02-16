import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { FournisseurService } from './fournisseur.service';
import { Fournisseur } from '../models/fournisseur.model';
import { FournisseurStatus } from '../enums/fournisseurStatus';

describe('FournisseurService', () => {
  let apiUrl = 'http://localhost:8080/fournisseur';
  let service: FournisseurService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FournisseurService],
    });
    service = TestBed.inject(FournisseurService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Fournisseurs', () => {
    const dummyFournisseurs: Fournisseur[] = [
      { id: 1, name: 'Fournisseur 1', status: FournisseurStatus.ACTIVE },
      { id: 2, name: 'Fournisseur 2', status: FournisseurStatus.INACTIVE },
    ];

    service.getAll().subscribe((fournisseurs) => {
      expect(fournisseurs).toEqual(dummyFournisseurs);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/all`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyFournisseurs);
  });

  it('should create a Fournisseur', () => {
    const newFournisseur: Fournisseur = {
      name: 'New Fournisseur',
      status: FournisseurStatus.ACTIVE,
    };

    service.create(newFournisseur).subscribe((createdFournisseur) => {
      expect(createdFournisseur).toEqual(newFournisseur);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/save`);
    expect(req.request.method).toEqual('POST');
    req.flush(newFournisseur);
  });

  it('should get a Fournisseur by ID', () => {
    const idToGet = 1;
    const dummyFournisseur: Fournisseur = {
      id: 1,
      name: 'Fournisseur 1',
      status: FournisseurStatus.ACTIVE,
    };

    service.getById(idToGet).subscribe((fournisseur) => {
      expect(fournisseur).toEqual(dummyFournisseur);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/${idToGet}`);
    expect(req.request.method).toEqual('GET');
    req.flush(dummyFournisseur);
  });

  it('should update a Fournisseur', () => {
    const idToUpdate = 1;
    const updatedFournisseur: Fournisseur = {
      id: 1,
      name: 'Updated Fournisseur',
      status: FournisseurStatus.INACTIVE,
    };

    service.update(idToUpdate, updatedFournisseur).subscribe((response) => {
      expect(response).toEqual(updatedFournisseur);
    });

    const req = httpTestingController.expectOne(
      `${apiUrl}/update/${idToUpdate}`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(updatedFournisseur);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
