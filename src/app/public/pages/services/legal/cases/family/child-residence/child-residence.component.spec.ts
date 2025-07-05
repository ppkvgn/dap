import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildResidenceComponent } from './child-residence.component';

describe('ChildResidenceComponent', () => {
  let component: ChildResidenceComponent;
  let fixture: ComponentFixture<ChildResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildResidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
