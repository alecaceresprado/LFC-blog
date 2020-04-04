import { Component, Input } from '@angular/core';

import { FeedModel } from '../../models';
import {formatDate} from '../../utils';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent {

  @Input() post: FeedModel;

  public get postDate(): string {
    return formatDate(this.post.publish_date);
  }
}
