import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { FeedModel } from '../../models';
import { AppState } from '../../state';
import { getFeeds } from '../../state/feeds';

@Component({
  selector: 'app-home-page-container',
  templateUrl: './home-page-container.component.html',
  styleUrls: ['./home-page-container.component.scss']
})
export class HomePageContainerComponent implements OnInit {

  public feeds$: Observable<FeedModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.feeds$ = this.store.pipe(select(getFeeds));
  }

}
