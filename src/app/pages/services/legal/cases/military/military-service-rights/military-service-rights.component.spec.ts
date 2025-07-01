import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryServiceRightsComponent } from './military-service-rights.component';

describe('MilitaryServiceRightsComponent', () => {
  let component: MilitaryServiceRightsComponent;
  let fixture: ComponentFixture<MilitaryServiceRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryServiceRightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryServiceRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
