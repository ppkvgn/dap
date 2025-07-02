import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdStatusComponent } from './ubd-status.component';

describe('UbdStatusComponent', () => {
  let component: UbdStatusComponent;
  let fixture: ComponentFixture<UbdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbdStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
