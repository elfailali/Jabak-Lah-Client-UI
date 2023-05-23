import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpSmsComponent } from './otp-sms.component';

describe('OtpSmsComponent', () => {
  let component: OtpSmsComponent;
  let fixture: ComponentFixture<OtpSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
