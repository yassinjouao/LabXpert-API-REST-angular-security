import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowresultComponent } from './showresult.component';

describe('ShowresultComponent', () => {
  let component: ShowresultComponent;
  let fixture: ComponentFixture<ShowresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
