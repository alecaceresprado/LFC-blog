import {createAction, props} from '@ngrx/store';
import {CommentModel, EditCommentModel, PostCommentModel} from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

export const fetchComments = createAction(
  '[COMMENTS] Fetch Comments for post',
    props<{ postSlug: string }>()
);

export const fetchCommentsSucceeded = createAction(
  '[COMMENTS] Fetch Comments for post - SUCCESS',
  props<{ comments: CommentModel[], postId: number }>()
);

export const fetchCommentsFailed = createAction(
  '[COMMENTS] Fetch Comments for post - ERROR',
  props<{ error: HttpErrorResponse }>()
);

export const postComment = createAction(
  '[COMMENTS] Post new comment',
    props<PostCommentModel>()
);

export const postCommentsSucceeded = createAction(
  '[COMMENTS] Post Comments for post - SUCCESS',
  props<{ comment: CommentModel }>()
);

export const postCommentsFailed = createAction(
  '[COMMENTS] Post Comments for post - ERROR',
  props<{ error: HttpErrorResponse }>()
);

export const editComment = createAction(
  '[COMMENTS] Edit existing comment',
    props<EditCommentModel>()
);

export const editCommentsSucceeded = createAction(
  '[COMMENTS] Edit existing comment - SUCCESS',
  props<{ comment: CommentModel }>()
);

export const editCommentsFailed = createAction(
  '[COMMENTS] Edit existing comment - ERROR',
  props<{ error: HttpErrorResponse }>()
);
