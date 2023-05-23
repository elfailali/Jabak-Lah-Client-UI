import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidBillsComponent } from './unpaid-bills.component';

describe('UnpaidBillsComponent', () => {
  let component: UnpaidBillsComponent;
  let fixture: ComponentFixture<UnpaidBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpaidBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
