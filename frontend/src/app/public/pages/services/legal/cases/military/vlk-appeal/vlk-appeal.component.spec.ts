import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlkAppealComponent } from './vlk-appeal.component';

describe('VlkAppealComponent', () => {
  let component: VlkAppealComponent;
  let fixture: ComponentFixture<VlkAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlkAppealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlkAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
