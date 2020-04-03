import {Component, Input, OnChanges} from '@angular/core';

import {FeedModel} from '../../models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnChanges {

  @Input() public post: FeedModel;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.post && this.post.comments);
  }

}
