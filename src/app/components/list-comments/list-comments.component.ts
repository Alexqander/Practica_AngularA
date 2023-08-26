import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  
  listComments: Comment[] = [];
  
  /* listComments: Comment[] = [
    {title: 'Test1',author: 'Alexander',description:'Me cai',createdAt: new Date()},
    {title: 'Test2',author: 'Rodrigo',description:'Me cai',createdAt: new Date()},
    {title: 'Test3',author: 'Cochi',description:'Me cai',createdAt: new Date()},
    {title: 'Test4',author: 'Luz',description:'Me cai',createdAt: new Date()},
    {title: 'Test5',author: 'Uriel',description:'Me cai',createdAt: new Date()},
  ] */
  
  constructor(private _comentarioService: CommentService) { }
  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this._comentarioService.getComments().subscribe(
      data => {
        console.log(data)
        this.listComments = data;
      }, error => {
        throw new Error(error);
        console.log(error)
      }
    )
  }

  deleteComment(id: any) {
    this._comentarioService.deleteComment(id).subscribe(data => {
      this.getComments();
    }, error => {
      throw new Error(error);
      console.log(error)
    })
    
  }

}
