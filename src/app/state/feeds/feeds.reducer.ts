import {Action, createReducer, on} from '@ngrx/store';

import {feedsInitialState, FeedsState} from './feeds.state';
import { fetchFeedsSucceeded } from './feeds.actions';
import {FeedModel} from '../../models';
import {editCommentsSucceeded, fetchCommentsSucceeded, postCommentsSucceeded} from '../comments';


const reducer = createReducer(feedsInitialState,
  on(fetchFeedsSucceeded, (state, {feeds}) => {
    const sortedFeeds = [...feeds].sort(sortByDate);
    return {
      ...state,
      list: sortedFeeds
    };
  }),
  on(fetchCommentsSucceeded, (state, {comments, postId}) => {
      const postsWithComments = state.list.map(post =>
        (post.id === postId ? { ...post, comments } : post)
      );
      return {
        ...state,
        list: postsWithComments,
      };
  }),

  on(postCommentsSucceeded, (state, {comment}) => {
      const postsWithComments = state.list.map(post =>
        (post.id === parseInt(comment.postId as string, 10) ?
          {
            ...post,
            comments: [...(post.comments || []), comment]
          } :
          post
        )
      );
      return {
        ...state,
        list: postsWithComments,
      };
  }),

  on(editCommentsSucceeded, (state, {comment}) => {
      const postsWithComments = state.list.map(post =>
        (post.id === parseInt(comment.postId as string, 10) ?
          {
            ...post,
            comments: post.comments.map(commentToEdit => {
              if (commentToEdit.id === comment.id) {
                return comment;
              }
              return commentToEdit;
            }),
          } :
          post
        )
      );
      return {
        ...state,
        list: postsWithComments,
      };
  }),
);

export function feedsReducer( state: FeedsState | undefined, action: Action): FeedsState {
  return reducer(state, action);
}

const sortByDate = (post1: FeedModel, post2: FeedModel): number =>
  new Date(post2.publish_date).valueOf() - new Date(post1.publish_date).valueOf();
