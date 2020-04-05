import {getCommentsForPost} from './comments.selectors';
import {stateMock} from '../../mocks/mockState';

describe('comments selectors', () => {
  it('should format comments in nested mode', () => {
    const comments = getCommentsForPost(stateMock, {postSlug: 'blog-post-1'});
    console.log(comments);
    expect(comments.length).toBe(10);
    expect(comments[0].comments.length).toBe(2);
  });
});
