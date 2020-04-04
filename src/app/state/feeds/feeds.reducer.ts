import {Action, createReducer, on} from '@ngrx/store';

import {feedsInitialState, FeedsState} from './feeds.state';
import { fetchFeedsSucceeded } from './feeds.actions';
import {CommentModel, FeedModel} from '../../models';
import {fetchCommentsSucceeded} from '../comments';


const reducer = createReducer(feedsInitialState,
  on(fetchFeedsSucceeded, (state, {feeds}) => {
    const sortedFeeds = [...feeds].sort(sortByDate);
    return {
      ...state,
      list: sortedFeeds
    };
  }),
  on(fetchCommentsSucceeded, (state, {comments, postId}) => {
      const nestedComments = buildNestedComments(comments);
      const postsWithComments = state.list.map(post =>
        (post.id === postId ? { ...post, comments: nestedComments } : post)
      );
      return {
        ...state,
        list: postsWithComments,
      };
  })
);

export function feedsReducer( state: FeedsState | undefined, action: Action): FeedsState {
  return reducer(state, action);
}

const sortByDate = (post1: FeedModel, post2: FeedModel): number =>
  new Date(post2.publish_date).valueOf() - new Date(post1.publish_date).valueOf();

// builds nesting hierarchy for comments
// Will assume that backend returns comments ordered by ID, this means that the newest comments will come last
// Then If a comment is a child of another comment, the parent will come first in the array
const buildNestedComments = (comments: CommentModel[]): CommentModel[] => {
  // the Idea is to go from last to first and push each comment into it's parent (not recursive).
  return [...comments]
    // reverse to get comments from last
    .reverse().
    // the result of the reduce method will be the enriched nested object.
    reduce(nestComments, comments)
    // then, we need to clean the comments that are on the root but have parentId
    .filter(isRootComment);
};

const getIndex = (comments: CommentModel[], comment: CommentModel, criteria: string): number =>
  comments.findIndex(parent => parent.id === comment[criteria]);

const nestComments = (acc: CommentModel[], comment: CommentModel ) => {
  if (!!comment.parent_id) {
    const parentIndex = getIndex(acc, comment, 'parent_id');
    return acc.map((parsedComment, index) => {
      if (index === parentIndex) {
        const commentToPush = acc[getIndex(acc, comment, 'id')];
        return {
          ...parsedComment,
          comments: [...parsedComment.comments || [], commentToPush],
        };
      } else {
        return parsedComment;
      }
    });
  }
  return acc;
};

const isRootComment = (comment: CommentModel): boolean => (!comment.parent_id);
