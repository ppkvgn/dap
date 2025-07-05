import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TccSupportComponent } from './tcc-support.component';

describe('TccSupportComponent', () => {
  let component: TccSupportComponent;
  let fixture: ComponentFixture<TccSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TccSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TccSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
