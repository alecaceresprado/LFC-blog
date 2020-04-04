import { Component, Input } from '@angular/core';

import { FeedModel } from '../../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @Input() public feeds: FeedModel[];

  constructor() {}
}
