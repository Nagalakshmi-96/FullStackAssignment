import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListHeaderComponent } from './submission-list-header.component';

describe('SubmissionListHeaderComponent', () => {
  let component: SubmissionListHeaderComponent;
  let fixture: ComponentFixture<SubmissionListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
