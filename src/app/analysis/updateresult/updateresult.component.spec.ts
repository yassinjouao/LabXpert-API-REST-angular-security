import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateresultComponent } from './updateresult.component';

describe('UpdateresultComponent', () => {
  let component: UpdateresultComponent;
  let fixture: ComponentFixture<UpdateresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
