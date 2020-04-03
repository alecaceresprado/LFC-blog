import {CommentModel} from './comment.model';

export interface FeedModel {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: Element;
  comments?: CommentModel[];
}
