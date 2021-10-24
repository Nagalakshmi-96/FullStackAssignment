import { SubmissionListModule } from './submission-list.module';

describe('SubmissionListModule', () => {
  let submissionListModule: SubmissionListModule;

  beforeEach(() => {
    submissionListModule = new SubmissionListModule();
  });

  it('should create an instance', () => {
    expect(submissionListModule).toBeTruthy();
  });
});
