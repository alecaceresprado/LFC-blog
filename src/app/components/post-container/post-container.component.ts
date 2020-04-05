import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {CommentModel, FeedModel} from '../../models';
import {AppState, fetchComments, getFeedBySlug, getCommentsForPost} from '../../state';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html'
})
export class PostContainerComponent implements OnInit {

  public post$: Observable<FeedModel>;
  public comments$: Observable<CommentModel[]>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postSlug = this.route.snapshot.params.postSlug;
    this.post$ = this.store.pipe(select(getFeedBySlug, { postSlug }));
    this.comments$ = this.store.pipe(select(getCommentsForPost, { postSlug }));
    this.store.dispatch(fetchComments({postSlug}));
  }

}
