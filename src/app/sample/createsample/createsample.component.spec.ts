import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesampleComponent } from './createsample.component';

describe('CreatesampleComponent', () => {
  let component: CreatesampleComponent;
  let fixture: ComponentFixture<CreatesampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
