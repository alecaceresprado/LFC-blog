import {Component, Input} from '@angular/core';

import {CommentModel} from '../../models';
import {formatDate} from '../../utils';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {

  @Input() comment: CommentModel;

  constructor() { }
  public get commentDate(): string {
    return formatDate(this.comment.date);
  }
}
