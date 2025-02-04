import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  createPost,
  deletePost,
  loadPosts,
  updatePost,
} from '../../state/post.actions';
import { Post } from '../../models/post.model';
import { Observable } from 'rxjs';
import { selectAllPosts } from '../../state/post.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  newPost: Post = { id: 0, title: '', body: '' };

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  createPost(): void {
    const newPost = {
      ...this.newPost,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    this.store.dispatch(createPost({ post: newPost }));
    this.newPost = { id: 0, title: '', body: '' };
  }

  editPost(post: Post): void {
    const updatedPost = {
      ...post,
      title: 'Updated Title',
      body: 'Updated Body',
    };
    this.store.dispatch(updatePost({ post: updatedPost }));
  }

  deletePost(postId: number): void {
    this.store.dispatch(deletePost({ postId }));
  }
}
