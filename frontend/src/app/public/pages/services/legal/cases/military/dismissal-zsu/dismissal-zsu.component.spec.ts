import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissalZsuComponent } from './dismissal-zsu.component';

describe('DismissalZsuComponent', () => {
  let component: DismissalZsuComponent;
  let fixture: ComponentFixture<DismissalZsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DismissalZsuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DismissalZsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
