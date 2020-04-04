import {createAction, props} from '@ngrx/store';
import { CommentModel } from '../../models';
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
