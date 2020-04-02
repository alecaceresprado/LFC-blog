export interface FeedModel {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: Element;
  comments?: FeedCommentModel[];
}

export interface FeedCommentModel {
  id: number;
  postId: number;
  parent_id: number;
  user: string;
  date: string;
  content: string;
}
