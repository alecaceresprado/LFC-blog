import {
  createSelector,
  MemoizedSelectorWithProps
} from '@ngrx/store';

import {CommentModel} from '../../models';
import {AppState} from '../app.reducer';
import {getFeedBySlug} from '../feeds/feeds.selectors';


export const getCommentsForPost:
  MemoizedSelectorWithProps<AppState, {postSlug: string}, CommentModel[]> = createSelector(
  getFeedBySlug,
  (post) => {
    if (post && post.comments) {
      const nestedComments = buildNestedComments(post.comments);
      return nestedComments;
    }
    return undefined;
  }
);

const getIndex = (comments: CommentModel[], comment: CommentModel, criteria: string): number =>
  comments.findIndex(parent => parent.id === comment[criteria]);

const isRootComment = (comment: CommentModel): boolean => (!comment.parent_id);

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
