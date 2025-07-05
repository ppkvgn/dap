import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualComponent } from './intellectual.component';

describe('IntellectualComponent', () => {
  let component: IntellectualComponent;
  let fixture: ComponentFixture<IntellectualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntellectualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellectualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
