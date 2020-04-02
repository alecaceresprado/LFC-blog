import {catchError, switchMap, map, tap} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { FeedService } from '../../services';
import {fetchFeeds, fetchFeedsFailed, fetchFeedsSucceeded} from './feeds.actions';

@Injectable()
export class FeedsEffects {
  public fetchFeeds$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFeeds),
      switchMap(() =>
        this.feeds.listFeeds().pipe(
          map(payload => fetchFeedsSucceeded({ feeds: payload })),
          catchError(error => of(fetchFeedsFailed({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private feeds: FeedService) {}
}
