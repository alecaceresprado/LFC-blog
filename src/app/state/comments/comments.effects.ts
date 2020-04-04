import {catchError, switchMap, map, filter, take} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Action, select, Store} from '@ngrx/store';

import { FeedService } from '../../services';
import {fetchComments, fetchCommentsFailed, fetchCommentsSucceeded} from './comments.actions';
import { getFeeds } from '../feeds/feeds.selectors';
import {AppState} from '../app.reducer';

@Injectable()
export class CommentsEffects {
  public fetchComments$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchComments),
      switchMap(
        ({postSlug}) => this.store.pipe(
          select(getFeeds),
          filter((posts) => !!posts.length),
          take(1),
          map((posts) =>  posts.find(post => post.slug === postSlug).id),
          switchMap((postId) =>
            this.feeds.getCommentsForPost(postId).pipe(
              map(payload => fetchCommentsSucceeded({ comments: payload, postId })),
              catchError(error => of(fetchCommentsFailed({ error })))
            )
          )
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private feeds: FeedService,
    private store: Store<AppState>
  ) {}
}
