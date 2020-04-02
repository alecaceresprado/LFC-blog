import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';

import {FeedModel} from '../../models';

export const fetchFeeds = createAction(
  '[FEEDS] Fetch feeds list'
);

export const fetchFeedsSucceeded = createAction(
  '[FEEDS] Fetch feeds list - SUCCESS',
  props<{ feeds: FeedModel[] }>()
);

export const fetchFeedsFailed = createAction(
  '[FEEDS] Fetch feeds list - ERROR',
  props<{ error: HttpErrorResponse }>()
);
