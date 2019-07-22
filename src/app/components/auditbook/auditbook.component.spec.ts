import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditbookComponent } from './auditbook.component';

describe('AuditbookComponent', () => {
  let component: AuditbookComponent;
  let fixture: ComponentFixture<AuditbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
