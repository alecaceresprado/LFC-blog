import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {provideMockStore} from '@ngrx/store/testing';

import { HomePageContainerComponent } from './home-page-container.component';
import {stateMock} from '../../mocks/mockState';

describe('HomePageContainerComponent', () => {
  let component: HomePageContainerComponent;
  let fixture: ComponentFixture<HomePageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageContainerComponent ],
      providers: [provideMockStore({initialState: stateMock})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
