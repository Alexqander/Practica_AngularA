import { Component } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  listComments: Comment[] = [
    {title: 'Test1',author: 'Alexander',description:'Me cai',createdAt: new Date()},
    {title: 'Test2',author: 'Rodrigo',description:'Me cai',createdAt: new Date()},
    {title: 'Test3',author: 'Cochi',description:'Me cai',createdAt: new Date()},
    {title: 'Test4',author: 'Luz',description:'Me cai',createdAt: new Date()},
    {title: 'Test5',author: 'Uriel',description:'Me cai',createdAt: new Date()},
  ]
}
