import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFoundedComponent } from './no-page-founded.component';

describe('NoPageFoundedComponent', () => {
  let component: NoPageFoundedComponent;
  let fixture: ComponentFixture<NoPageFoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageFoundedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageFoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
