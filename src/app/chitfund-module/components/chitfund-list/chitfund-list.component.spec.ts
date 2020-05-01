import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitfundListComponent } from './chitfund-list.component';

describe('ChitfundListComponent', () => {
  let component: ChitfundListComponent;
  let fixture: ComponentFixture<ChitfundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitfundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitfundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
