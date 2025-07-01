import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarInjuryCompensationComponent } from './war-injury-compensation.component';

describe('WarInjuryCompensationComponent', () => {
  let component: WarInjuryCompensationComponent;
  let fixture: ComponentFixture<WarInjuryCompensationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarInjuryCompensationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarInjuryCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
