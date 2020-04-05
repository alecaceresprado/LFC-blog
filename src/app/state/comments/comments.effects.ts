import {catchError, switchMap, map, filter, take, tap} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Action, select, Store} from '@ngrx/store';

import { FeedService } from '../../services';
import {
  fetchComments,
  fetchCommentsFailed,
  fetchCommentsSucceeded,
  postCommentsFailed,
  postCommentsSucceeded,
  postComment,
  editComment,
  editCommentsSucceeded,
  editCommentsFailed
} from './comments.actions';
import { getFeeds } from '../feeds/feeds.selectors';
import {AppState} from '../app.reducer';
import {CommentService} from '../../services/comment.service';

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

  public postNewComment$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(postComment),
      switchMap(({postId, parentId, comment}) =>
        this.comments.postComment({postId, parentId, comment }).pipe(
          map(payload => postCommentsSucceeded({ comment: payload })),
          catchError(error => of(postCommentsFailed({ error })))
        )
      ),
    )
  );

  public editExistingComment$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(editComment),
      switchMap(({postId, parentId, comment, commentId}) =>
        this.comments.putComment({postId, parentId, comment, commentId }).pipe(
          map(payload => editCommentsSucceeded({ comment: payload })),
          catchError(error => of(editCommentsFailed({ error })))
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private feeds: FeedService,
    private comments: CommentService,
    private store: Store<AppState>
  ) {}
}
