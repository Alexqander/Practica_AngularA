import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {
  id: number;
  comment: any
  constructor(private activateRoute: ActivatedRoute, private _comentarioService: CommentService) {
    this.id = +activateRoute.snapshot.paramMap.get('id')!;
  
  }

  getComment() {
    this._comentarioService.getComment(this.id).subscribe(
      data => {
        this.comment = data;
      
      }, error => {
        throw new Error(error);
        console.log(error)
      
      }
    )
  }
  
  ngOnInit(): void {
    this.getComment();
  }
}
