import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    service = new CommentService({} as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
