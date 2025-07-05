import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTransferComponent } from './unit-transfer.component';

describe('UnitTransferComponent', () => {
  let component: UnitTransferComponent;
  let fixture: ComponentFixture<UnitTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
