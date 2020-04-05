import { FeedService } from './feed.service';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    service = new FeedService({} as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
