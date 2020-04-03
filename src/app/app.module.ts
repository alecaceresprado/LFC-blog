import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, HomePageContainerComponent } from './components';
import {
  appReducer,
  AppState,
  CommentsEffects,
  FeedsEffects,
  fetchFeeds
} from './state';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostRowComponent } from './components/post-row/post-row.component';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageContainerComponent,
    HeaderComponent,
    FooterComponent,
    PostRowComponent,
    PostContainerComponent,
    PostDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([CommentsEffects, FeedsEffects]),
    HttpClientModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (store: Store<AppState>) => {
      return () => {
        store.dispatch(fetchFeeds());
      };
    },
    multi: true,
    deps: [Store]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
