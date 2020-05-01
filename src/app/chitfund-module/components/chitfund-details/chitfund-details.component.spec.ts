import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitfundDetailsComponent } from './chitfund-details.component';

describe('ChitfundDetailsComponent', () => {
  let component: ChitfundDetailsComponent;
  let fixture: ComponentFixture<ChitfundDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitfundDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitfundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
