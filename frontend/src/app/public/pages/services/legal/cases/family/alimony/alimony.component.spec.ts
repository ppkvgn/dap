import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimonyComponent } from './alimony.component';

describe('AlimonyComponent', () => {
  let component: AlimonyComponent;
  let fixture: ComponentFixture<AlimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimonyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
