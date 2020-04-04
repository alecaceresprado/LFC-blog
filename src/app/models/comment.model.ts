export interface CommentModel {
  id: number;
  postId: number;
  parent_id: number;
  user: string;
  date: string;
  content: string;
  comments?: CommentModel[];
}

export interface PostCommentModel {
  postId: number;
  parentId?: number;
  comment: string;
};
