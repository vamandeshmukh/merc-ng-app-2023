import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentList: Comment[] | any = '';

  @Input()
  pId: number = 0;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    console.log(this.pId);
    this.commentService.getCommentByPostId(this.pId)
      .subscribe((response) => {
        console.log(response.length);
        this.commentList = response;
      });
  }



}
