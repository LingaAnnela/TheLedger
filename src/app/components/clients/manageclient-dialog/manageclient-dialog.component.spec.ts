import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageclientDialogComponent } from './manageclient-dialog.component';

describe('ManageclientDialogComponent', () => {
  let component: ManageclientDialogComponent;
  let fixture: ComponentFixture<ManageclientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageclientDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageclientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
