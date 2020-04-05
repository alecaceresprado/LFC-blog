import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { PostContainerComponent } from './post-container.component';
import {provideMockStore} from '@ngrx/store/testing';
import {stateMock} from '../../mocks/mockState';

describe('PostContainerComponent', () => {
  let component: PostContainerComponent;
  let fixture: ComponentFixture<PostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [PostContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({initialState: stateMock}),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                postSlug: '1'
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
