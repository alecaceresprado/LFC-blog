import { createFeatureSelector } from '@ngrx/store';

import { FeedModel } from '../../models';


export const getFeeds = createFeatureSelector<FeedModel[]>('feeds');
