import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: string }>()
);

export const createPost = createAction(
  '[Post] Create Post',
  props<{ post: Post }>()
);
export const createPostSuccess = createAction(
  '[Post] Create Post Success',
  props<{ post: Post }>()
);
export const createPostFailure = createAction(
  '[Post] Create Post Failure',
  props<{ error: string }>()
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ post: Post }>()
);
export const updatePostSuccess = createAction(
  '[Post] Update Post Success',
  props<{ post: Post }>()
);
export const updatePostFailure = createAction(
  '[Post] Update Post Failure',
  props<{ error: string }>()
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ postId: number }>()
);
export const deletePostSuccess = createAction(
  '[Post] Delete Post Success',
  props<{ postId: number }>()
);
export const deletePostFailure = createAction(
  '[Post] Delete Post Failure',
  props<{ error: string }>()
);
