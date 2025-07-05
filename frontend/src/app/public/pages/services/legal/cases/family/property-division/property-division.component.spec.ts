import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDivisionComponent } from './property-division.component';

describe('PropertyDivisionComponent', () => {
  let component: PropertyDivisionComponent;
  let fixture: ComponentFixture<PropertyDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
