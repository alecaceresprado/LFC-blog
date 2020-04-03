import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeedModel} from '../../models';
import {AppState, getFeedById} from '../../state';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  public post$: Observable<FeedModel>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = parseInt(this.route.snapshot.params.postId, 10);
    this.post$ = this.store.pipe(select(getFeedById, { postId }));
  }

}
