import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPassedComponent } from './transaction-passed.component';

describe('TransactionPassedComponent', () => {
  let component: TransactionPassedComponent;
  let fixture: ComponentFixture<TransactionPassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPassedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
