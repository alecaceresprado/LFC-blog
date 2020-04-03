import { Component, Input } from '@angular/core';
import {Store} from '@ngrx/store';

import { FeedModel } from '../../models';
import {AppState} from '../../state';
import {fetchComments} from '../../state/comments';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @Input() public feeds: FeedModel[];

  private fetched: {[key: number]: boolean} = {};

  constructor(private store: Store<AppState>) {}

  public getPostComents(postId: number): void {
    if (!this.fetched[postId]) {
    this.store.dispatch(fetchComments({postId}));
    this.fetched[postId] = true;
    }
  }

}
