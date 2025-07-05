import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilizationDefermentComponent } from './mobilization-deferment.component';

describe('MobilizationDefermentComponent', () => {
  let component: MobilizationDefermentComponent;
  let fixture: ComponentFixture<MobilizationDefermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilizationDefermentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilizationDefermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
