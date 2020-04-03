import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageContainerComponent} from './components/home-page-container/home-page-container.component';
import {PostContainerComponent} from './components/post-container/post-container.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: HomePageContainerComponent
    },
    {
      path: 'post/:postId',
      component: PostContainerComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
