import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppState, getFeeds } from '../../state';
import { FeedModel } from '../../models';

@Component({
  selector: 'app-home-page-container',
  templateUrl: './home-page-container.component.html'
})
export class HomePageContainerComponent implements OnInit {

  public feeds$: Observable<FeedModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.feeds$ = this.store.pipe(select(getFeeds));
  }

}
