import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitfundsComponent } from './chitfunds.component';

describe('ChitfundsComponent', () => {
  let component: ChitfundsComponent;
  let fixture: ComponentFixture<ChitfundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitfundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
