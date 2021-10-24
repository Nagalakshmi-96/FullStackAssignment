import { AssigneeModule } from './assignee.module';

describe('AssigneeModule', () => {
  let assigneeModule: AssigneeModule;

  beforeEach(() => {
    assigneeModule = new AssigneeModule();
  });

  it('should create an instance', () => {
    expect(assigneeModule).toBeTruthy();
  });
});
