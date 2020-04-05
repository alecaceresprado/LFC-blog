import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState, editComment, postComment} from '../../state';
import {user} from '../../constants';

enum ButtonStatus {
  pristine = 'pristine',
  typing = 'typing'
}

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() postId: number;
  @Input() commentId: number;
  @Input() parentId: number;
  @Input() user: string;

  public submitStatus: ButtonStatus = ButtonStatus.pristine;
  public editStatus: ButtonStatus = ButtonStatus.pristine;
  public validation: string;
  public comment = '';
  public canEdit: boolean;

  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
    this.canEdit = this.user === user.name;
  }

  public handleSubmitClick(): void {
    if (this.submitStatus === ButtonStatus.pristine) {
      this.submitStatus = ButtonStatus.typing;
      this.editStatus = ButtonStatus.pristine;
      this.validation = '';
    } else {
      if (!!this.comment) {
        this.validation = undefined;
        this.store.dispatch(postComment({
          postId: this.postId,
          parentId: this.commentId,
          comment: this.comment
        }));
        this.comment = '';
        this.submitStatus = ButtonStatus.pristine;
      } else {
        this.validation = 'please type some comment to post';
      }
    }
  }

  public handleEditClick(): void {
    if (this.editStatus === ButtonStatus.pristine) {
      this.editStatus = ButtonStatus.typing;
      this.submitStatus = ButtonStatus.pristine;
      this.validation = '';
    } else {
      if (!!this.comment) {
        this.validation = undefined;
        this.store.dispatch(editComment({
          postId: this.postId,
          commentId: this.commentId,
          parentId: this.parentId,
          comment: this.comment
        }));
        this.comment = '';
        this.editStatus = ButtonStatus.pristine;
      } else {
        this.validation = 'please type some comment to post';
      }
    }
  }

  public handleInputChange(event): void {
    this.comment = event.target.value;
  }

  public get submitText(): string {
    switch (this.submitStatus) {
      case ButtonStatus.pristine:
        return 'Reply';
      case ButtonStatus.typing:
        return 'submit';
    }
  }
  public get editText(): string {
    switch (this.editStatus) {
      case ButtonStatus.pristine:
        return 'Edit';
      case ButtonStatus.typing:
        return 'submit';
    }
  }

  public get formStatus(): string {
    if (this.editStatus === ButtonStatus.typing || this.submitStatus === ButtonStatus.typing) {
      return 'typing';
    }
    return 'pristine';
  }

}
