import {catchError, switchMap, map, tap} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { FeedService } from '../../services';
import {fetchComments, fetchCommentsFailed, fetchCommentsSucceeded} from './comments.actions';

@Injectable()
export class CommentsEffects {
  public fetchFeeds$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchComments),
      switchMap(({postId}) =>
        this.feeds.getCommentsForPost(postId).pipe(
          map(payload => fetchCommentsSucceeded({ comments: payload, postId })),
          catchError(error => of(fetchCommentsFailed({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private feeds: FeedService) {}
}
