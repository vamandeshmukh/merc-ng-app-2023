import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentByPostId = (postId: number) => {

  };
}
