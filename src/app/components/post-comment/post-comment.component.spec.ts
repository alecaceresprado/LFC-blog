import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentComponent } from './post-comment.component';

describe('PostCommentComponent', () => {
  let component: PostCommentComponent;
  let fixture: ComponentFixture<PostCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentComponent);
    component = fixture.componentInstance;
    component.comment = {
      user: 'Alex',
      date: '2020-01-01',
      id: 1,
      parent_id: null,
      postId: 1,
      comments: undefined,
      content: 'mock comment'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
