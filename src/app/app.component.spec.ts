import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {platformBrowserTesting} from '@angular/platform-browser/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideMockStore} from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import {stateMock} from './mocks/mockState';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        platformBrowserTesting,
        provideMockActions({} as any),
        HttpClientTestingModule,
        provideMockStore({initialState: stateMock})
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
