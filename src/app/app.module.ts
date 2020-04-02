import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, HomePageContainerComponent } from './components';
import {appReducer, AppState, FeedsEffects} from './state';
import { fetchFeeds } from './state/feeds';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot([FeedsEffects]),
    HttpClientModule,
    [(!environment.production ? StoreDevtoolsModule.instrument() : undefined)],
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
