import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilizationAppealComponent } from './mobilization-appeal.component';

describe('MobilizationAppealComponent', () => {
  let component: MobilizationAppealComponent;
  let fixture: ComponentFixture<MobilizationAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilizationAppealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilizationAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
