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

export const getFeedBySlug:
  MemoizedSelectorWithProps<AppState, {postSlug: string}, FeedModel> = createSelector(
   getFeeds,
  (feeds: FeedModel[], {postSlug}) => feeds.find(feed => feed.slug === postSlug)
);
