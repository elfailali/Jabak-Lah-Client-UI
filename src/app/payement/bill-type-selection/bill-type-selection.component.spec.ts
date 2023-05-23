import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTypeSelectionComponent } from './bill-type-selection.component';

describe('BillTypeSelectionComponent', () => {
  let component: BillTypeSelectionComponent;
  let fixture: ComponentFixture<BillTypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillTypeSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
