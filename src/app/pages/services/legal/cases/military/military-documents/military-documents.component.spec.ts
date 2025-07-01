import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryDocumentsComponent } from './military-documents.component';

describe('MilitaryDocumentsComponent', () => {
  let component: MilitaryDocumentsComponent;
  let fixture: ComponentFixture<MilitaryDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilitaryDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilitaryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
