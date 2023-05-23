import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorSelectionComponent } from './creditor-selection.component';

describe('CreditorSelectionComponent', () => {
  let component: CreditorSelectionComponent;
  let fixture: ComponentFixture<CreditorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditorSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
