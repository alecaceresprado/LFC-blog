import {getFeeds, getFeedBySlug} from './feeds.selectors';
import {stateMock} from '../../mocks/mockState';

describe('feeds selectors', () => {
  it('should get posts', () => {
    expect(getFeeds(stateMock).length).toBe(10);
  });

  it('should get particular post', () => {
    expect(getFeedBySlug(stateMock, {postSlug: 'blog-post-1'}).title)
      .toBe('Blog post #1');
  });
});
