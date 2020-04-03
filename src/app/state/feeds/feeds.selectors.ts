import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps
} from '@ngrx/store';

import { FeedModel } from '../../models';
import {FeedsState} from './feeds.state';
import {AppState} from '../app.reducer';


export const getFeedsState = createFeatureSelector<FeedsState>('feeds');

export const getFeeds: MemoizedSelector<AppState, FeedModel[]> = createSelector(
  getFeedsState,
  ({ list }) => list
);

export const getFeedById:
  MemoizedSelectorWithProps<AppState, {postId: number}, FeedModel> = createSelector(
   getFeeds,
  (feeds: FeedModel[], {postId}) => feeds.find(feed => feed.id === postId)
);
