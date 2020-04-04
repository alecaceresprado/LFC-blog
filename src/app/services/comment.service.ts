import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostCommentModel} from '../models';
import {basePath} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  public postComment(
    {postId, comment, parentId}: PostCommentModel
  ): Observable<any> {
    const now = new Date();
    const date = now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
    const commentToPost = {
      date,
      parent_id: parentId,
      postId,
      user: 'unknown user',
      content: comment
    };
    return this.http.post<any>(`${basePath}/posts/${postId}/comments`, commentToPost);
  }
}
