import {Component, Input } from '@angular/core';

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

  constructor() { }

  public handleBtnClick(): void {
    if (this.status === ButtonStatus.pristine) {
      this.status = ButtonStatus.typing;
    } else {
      console.log(this.comment);
      if (!!this.comment) {
        console.log('post');
      } else {
        console.log('validation');
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
