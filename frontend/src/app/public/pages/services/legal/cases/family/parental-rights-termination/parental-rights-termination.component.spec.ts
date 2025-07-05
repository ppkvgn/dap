import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalRightsTerminationComponent } from './parental-rights-termination.component';

describe('ParentalRightsTerminationComponent', () => {
  let component: ParentalRightsTerminationComponent;
  let fixture: ComponentFixture<ParentalRightsTerminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentalRightsTerminationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentalRightsTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
