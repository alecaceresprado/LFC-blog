import {Action, createReducer, on} from '@ngrx/store';

import {feedsInitialState, FeedsState} from './feeds.state';
import { fetchFeedsSucceeded } from './feeds.actions';


const reducer = createReducer(feedsInitialState,
  on(fetchFeedsSucceeded, (state, {feeds}) => {
    return {
      ...state,
      feeds: {
        list: feeds
      }
    };
  })
);

export function feedsReducer( state: FeedsState | undefined, action: Action): FeedsState {
  return reducer(state, action);
}
