import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { PostService } from '../services/post.service';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPost,
  createPostSuccess,
  createPostFailure,
  updatePost,
  updatePostSuccess,
  updatePostFailure,
  deletePost,
  deletePostSuccess,
  deletePostFailure,
} from './post.actions';

@Injectable()
export class PostEffects {
  private actions$ = inject(Actions);
  private postService = inject(PostService);
  private store = inject(Store);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      switchMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error: error.message })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      switchMap(({ post }) =>
        this.postService.createPost(post).pipe(
          map((newPost) => createPostSuccess({ post: newPost })),
          catchError((error) => of(createPostFailure({ error: error.message })))
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      switchMap(({ post }) =>
        this.postService.editPost(post).pipe(
          map((updatedPost) => updatePostSuccess({ post: updatedPost })),
          catchError((error) => of(updatePostFailure({ error: error.message })))
        )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      switchMap(({ postId }) =>
        this.postService.deletePost(postId).pipe(
          map(() => deletePostSuccess({ postId })),
          catchError((error) => of(deletePostFailure({ error: error.message })))
        )
      )
    )
  );
}
