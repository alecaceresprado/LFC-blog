import {Component, Input } from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState, postComment} from '../../state';

enum ButtonStatus {
  pristine = 'pristine',
  typing = 'typing'
}

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  @Input() postId: number;
  @Input() parentId: number;

  public status: ButtonStatus = ButtonStatus.pristine;
  public validation: string;
  public comment = '';

  constructor(private store: Store<AppState>) { }

  public handleBtnClick(): void {
    if (this.status === ButtonStatus.pristine) {
      this.status = ButtonStatus.typing;
    } else {
      if (!!this.comment) {
        this.validation = undefined;
        this.store.dispatch(postComment({
          postId: this.postId,
          parentId: this.parentId,
          comment: this.comment
        }));
      } else {
        this.validation = 'please type some comment to post';
      }
    }
  }

  public handleInputChange(event): void {
    this.comment = event.target.value;
  }

  public get buttonText(): string {
    switch (this.status) {
      case ButtonStatus.pristine:
        return 'Reply';
      case ButtonStatus.typing:
        return 'submit';
    }
  }

}
