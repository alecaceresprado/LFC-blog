import { ActionReducerMap } from '@ngrx/store';

import { feedsReducer, FeedsState } from './feeds';

export interface AppState {
  feeds: FeedsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  feeds: feedsReducer,
};
