import { Component, Input } from '@angular/core';

import {FeedModel} from '../../models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  @Input() public post: FeedModel;

  constructor() { }

}
