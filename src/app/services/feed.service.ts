import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CommentModel, FeedModel} from '../models';
import {basePath} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient) {}

  public listFeeds(): Observable<FeedModel[]> {
    return this.http.get<FeedModel[]>(`${basePath}/posts`);
  }


  public getCommentsForPost(postId: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${basePath}/posts/${postId}/comments`);
  }

}
