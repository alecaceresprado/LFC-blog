import {Component, Input, OnInit} from '@angular/core';

import {FeedModel} from '../../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @Input() public feeds: FeedModel[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.feeds);
  }

}
