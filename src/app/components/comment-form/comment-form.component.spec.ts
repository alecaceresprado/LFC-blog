import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';

import { CommentFormComponent } from './comment-form.component';
import {stateMock} from '../../mocks/mockState';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFormComponent ],
      providers: [provideMockStore({initialState: stateMock})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    component.commentId = 1;
    component.postId = 1;
    component.user = 'alex';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
