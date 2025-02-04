import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPostSuccess,
  createPostFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
} from './post.actions';

export interface PostState {
  posts: Post[];
  error: string | null;
  loading: boolean;
}

export const initialState: PostState = {
  posts: [],
  error: null,
  loading: false,
};

export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
    error: null,
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(createPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
  })),
  on(createPostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(updatePostSuccess, (state, { post }) => ({
    ...state,
    posts: state.posts.map((p) => (p.id === post.id ? post : p)),
  })),
  on(updatePostFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(deletePostSuccess, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter((post) => post.id !== postId),
  })),
  on(deletePostFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
