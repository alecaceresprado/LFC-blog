import {FeedModel} from '../../models';

export interface FeedsState {
  list: FeedModel[];
}

export const feedsInitialState: FeedsState = {
  list: []
};
