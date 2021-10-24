import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListDataComponent } from './submission-list-data.component';

describe('SubmissionListDataComponent', () => {
  let component: SubmissionListDataComponent;
  let fixture: ComponentFixture<SubmissionListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
