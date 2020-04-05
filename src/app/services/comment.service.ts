import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentModel, EditCommentModel, PostCommentModel} from '../models';
import {basePath, user} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  public postComment(
    {postId, comment, parentId}: PostCommentModel
  ): Observable<CommentModel> {
    const now = new Date();
    const date = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    const commentToPost = {
      date,
      parent_id: parentId,
      postId,
      user: user.name,
      content: comment
    };
    return this.http.post<CommentModel>(`${basePath}/posts/${postId}/comments`, commentToPost);
  }

  public putComment(
    {postId, comment, parentId, commentId}: EditCommentModel
  ): Observable<CommentModel> {
    const now = new Date();
    const date = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    const commentToPost = {
      date,
      parent_id: parentId,
      postId,
      user: user.name,
      content: comment,
    };
    return this.http.put<CommentModel>(`${basePath}/comments/${commentId}`, commentToPost);
  }
}
